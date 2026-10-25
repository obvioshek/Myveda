import { glossaryAnki } from "@/content/learn/exports";

export const dynamic = "force-static";

// The glossary as Anki flashcards (content/learn/exports.ts).
export function GET() {
  return new Response(glossaryAnki(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Content-Disposition": 'attachment; filename="veda-verse-glossary-anki.txt"' },
  });
}
