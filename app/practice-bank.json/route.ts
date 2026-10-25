import { buildPracticeBank } from "@/content/learn/practice";

// Built once at deploy time; the practice page fetches it when it opens.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildPracticeBank());
}
