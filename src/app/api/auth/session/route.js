import { notImplemented } from "@/lib/api-response";

export async function GET() {
  return notImplemented({
    feature: "auth",
    endpoint: "GET /api/auth/session",
    owner: "Wika",
  });
}
