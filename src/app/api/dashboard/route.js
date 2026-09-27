import { notImplemented } from "@/lib/api-response";

export async function GET() {
  return notImplemented({
    feature: "dashboard",
    endpoint: "GET /api/dashboard",
    owner: "Nopal",
  });
}
