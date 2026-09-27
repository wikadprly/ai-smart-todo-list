import { notImplemented } from "@/lib/api-response";

export async function GET() {
  return notImplemented({
    feature: "schedule",
    endpoint: "GET /api/schedules",
    owner: "Arkan",
  });
}

export async function POST() {
  return notImplemented({
    feature: "schedule",
    endpoint: "POST /api/schedules",
    owner: "Arkan",
  });
}
