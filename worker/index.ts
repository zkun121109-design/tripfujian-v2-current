/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  MEDIA: R2Bucket;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

function withSecurityHeaders(request: Request, response: Response) {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  const url = new URL(request.url);
  if (url.protocol === "https:" && (url.hostname === "tripfujian.com" || url.hostname === "www.tripfujian.com")) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Content-Security-Policy", "object-src 'none'; base-uri 'self'; frame-ancestors 'none'");
  }

  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.tripfujian.com") {
      url.hostname = "tripfujian.com";
      return withSecurityHeaders(request, Response.redirect(url.toString(), 308));
    }

    if (url.pathname === "/sitemap_index.xml") {
      return withSecurityHeaders(request, Response.redirect(new URL("/sitemap.xml", url).toString(), 308));
    }

    const legacyPrefixes = [
      "/index.php",
      "/lineline",
      "/fandian",
      "/rent_a_car",
      "/about-us",
      "/contact-us",
      "/search.html",
      "/template/",
      "/uploads/",
      "/public/static/",
    ];
    if (legacyPrefixes.some((prefix) => url.pathname === prefix || url.pathname.startsWith(prefix.endsWith("/") ? prefix : `${prefix}/`))) {
      return withSecurityHeaders(request, new Response("This legacy URL has been permanently removed.", {
        status: 410,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow",
          "Cache-Control": "public, max-age=3600",
        },
      }));
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withSecurityHeaders(request, response);
    }

    return withSecurityHeaders(request, await handler.fetch(request, env, ctx));
  },
};

export default worker;
