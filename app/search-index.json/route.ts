import { buildSearchIndex } from "@/content/learn/search";

// Built once at deploy time; the header search fetches it when first opened.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex());
}
