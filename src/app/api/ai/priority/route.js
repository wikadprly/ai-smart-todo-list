import { notImplemented } from "@/lib/api-response";

export async function POST() {
  return notImplemented({
    feature: "priority",
    endpoint: "POST /api/ai/priority",
    owner: "Haikal",
  });
}
