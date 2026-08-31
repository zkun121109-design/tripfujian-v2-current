import { isAdmin, unauthorized } from "../auth";

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  return Response.json({ authenticated: true });
}
