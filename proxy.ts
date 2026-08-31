import { NextResponse, type NextRequest } from "next/server";

const PATHNAME_HEADER = "x-yujunyou-pathname";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PATHNAME_HEADER, request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/|favicon\\.svg$|robots\\.txt$|sitemap\\.xml$).*)"],
};
