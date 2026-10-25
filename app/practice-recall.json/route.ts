import { buildRecallBank } from "@/content/learn/practice";

// Built once at deploy time; the practice page fetches it only when recall is used.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildRecallBank());
}
