import { glossaryCsv } from "@/content/learn/exports";

export const dynamic = "force-static";

// The glossary as a spreadsheet (content/learn/exports.ts).
export function GET() {
  return new Response(glossaryCsv(), {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="veda-verse-glossary.csv"' },
  });
}
