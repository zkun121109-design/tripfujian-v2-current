import { ensureSchema, getEnv } from "@/db/runtime";
import { isAdmin, unauthorized } from "../auth";

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const url = new URL(request.url);
  const status = url.searchParams.get("status") || "all";
  const query = url.searchParams.get("q")?.trim().slice(0, 100) || "";
  const clauses: string[] = [];
  const values: unknown[] = [];
  if (status !== "all") { clauses.push("status = ?"); values.push(status); }
  if (query) { clauses.push("(name LIKE ? OR contact LIKE ? OR destinations LIKE ?)"); values.push(`%${query}%`, `%${query}%`, `%${query}%`); }
  const sql = `SELECT * FROM inquiries ${clauses.length ? `WHERE ${clauses.join(" AND ")}` : ""} ORDER BY created_at DESC, id DESC LIMIT 300`;
  const rows = await getEnv().DB.prepare(sql).bind(...values).all();
  return Response.json({ inquiries: rows.results });
}

export async function PATCH(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const { id, status, adminNote } = await request.json() as { id?: number; status?: string; adminNote?: string };
  if (!id) return Response.json({ error: "缺少客户编号" }, { status: 400 });
  const allowed = new Set(["new", "contacted", "planning", "won", "closed"]);
  const safeStatus = allowed.has(status || "") ? status : "new";
  await getEnv().DB.prepare("UPDATE inquiries SET status = ?, admin_note = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
    .bind(safeStatus, String(adminNote || "").slice(0, 2000), id).run();
  return Response.json({ ok: true });
}
