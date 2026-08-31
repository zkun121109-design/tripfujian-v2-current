import { getEnv } from "@/db/runtime";
import { isAdmin, unauthorized } from "../auth";

const TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  const listed = await getEnv().MEDIA.list({ limit: 100 });
  return Response.json({ media: listed.objects.sort((a, b) => b.uploaded.getTime() - a.uploaded.getTime()).map((item) => ({ key: item.key, size: item.size, uploaded: item.uploaded, url: `/api/media/${encodeURIComponent(item.key)}` })) });
}

export async function POST(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  let file: File | null;
  try {
    const form = await request.formData();
    const entry = form.get("file");
    file = entry && typeof entry !== "string" ? entry : null;
  } catch (error) {
    const reason = error instanceof Error ? error.message : "未知表单错误";
    console.error("Media form parsing failed", error);
    return Response.json({ error: `图片表单解析失败：${reason}` }, { status: 500 });
  }
  if (!file || typeof file === "string") return Response.json({ error: "请选择图片" }, { status: 400 });
  if (!TYPES.has(file.type)) return Response.json({ error: "仅支持 JPG、PNG 和 WebP" }, { status: 400 });
  if (file.size > 8 * 1024 * 1024) return Response.json({ error: "单张图片不能超过 8MB" }, { status: 400 });
  const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const key = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${extension}`;
  try {
    const bytes = await file.arrayBuffer();
    await getEnv().MEDIA.put(key, bytes, { httpMetadata: { contentType: file.type }, customMetadata: { originalName: file.name.slice(0, 150) } });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "未知存储错误";
    console.error("R2 media upload failed", error);
    return Response.json({ error: `图片上传失败：${reason}` }, { status: 500 });
  }
  return Response.json({ media: { key, url: `/api/media/${encodeURIComponent(key)}`, size: file.size } }, { status: 201 });
}

export async function DELETE(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  const key = new URL(request.url).searchParams.get("key");
  if (!key) return Response.json({ error: "缺少图片编号" }, { status: 400 });
  await getEnv().MEDIA.delete(key);
  return Response.json({ ok: true });
}
