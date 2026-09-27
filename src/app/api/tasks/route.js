import { notImplemented } from "@/lib/api-response";

export async function GET() {
  return notImplemented({
    feature: "tasks",
    endpoint: "GET /api/tasks",
    owner: "Fauzan",
  });
}

export async function POST() {
  return notImplemented({
    feature: "tasks",
    endpoint: "POST /api/tasks",
    owner: "Fauzan",
  });
}
