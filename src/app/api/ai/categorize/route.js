import { notImplemented } from "@/lib/api-response";

export async function POST() {
  return notImplemented({
    feature: "categorization",
    endpoint: "POST /api/ai/categorize",
    owner: "Atha",
  });
}
