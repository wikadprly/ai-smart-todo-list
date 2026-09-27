import { notImplemented } from "@/lib/api-response";

export async function GET() {
  return notImplemented({
    feature: "categorization",
    endpoint: "GET /api/categories",
    owner: "Atha",
  });
}
