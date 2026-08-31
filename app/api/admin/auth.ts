import { getEnv } from "@/db/runtime";

const COOKIE_NAME = "yuejie_admin";
const MAX_AGE = 60 * 60 * 12;

function bytesToHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function signature(payload: string) {
  const secret = getEnv().SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET 尚未配置");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return bytesToHex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload)));
}

function readCookie(request: Request, name: string) {
  const value = request.headers.get("cookie")?.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${name}=`));
  return value?.slice(name.length + 1) ?? "";
}

function secureAttribute(request: Request) {
  return new URL(request.url).protocol === "https:" ? "; Secure" : "";
}

export async function createSessionCookie(username: string, request: Request) {
  const payload = `${username}.${Math.floor(Date.now() / 1000) + MAX_AGE}`;
  const token = `${payload}.${await signature(payload)}`;
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${MAX_AGE}${secureAttribute(request)}`;
}

export function clearSessionCookie(request: Request) {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secureAttribute(request)}`;
}

export async function isAdmin(request: Request) {
  const token = readCookie(request, COOKIE_NAME);
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [username, expires, supplied] = parts;
  if (!username || Number(expires) < Math.floor(Date.now() / 1000)) return false;
  const expected = await signature(`${username}.${expires}`);
  if (expected.length !== supplied.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) mismatch |= expected.charCodeAt(i) ^ supplied.charCodeAt(i);
  return mismatch === 0 && username === (getEnv().ADMIN_USERNAME || "admin");
}

export function unauthorized() {
  return Response.json({ error: "请先登录后台" }, { status: 401 });
}
