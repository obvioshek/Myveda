// A concept's "Don't confuse it with" notes (<p class="mixup"> in its text),
// shown again as a hint when a reader answers one of its questions wrongly:
// most wrong answers come from mixing an idea up with its neighbour, and these
// notes name that neighbour. Only <b> and <i> are kept, so a note is safe to
// show wherever it goes.
export function mixupsFor(html: string): string[] {
  return mixupNotes(html);
}

/**
 * The first mix-up of each note: its bold warning and the explanation up to
 * the next bold warning. That is what helps at the moment of a mistake; the
 * whole note stays in the chapter.
 */
export function mixupHints(html: string): string[] {
  return mixupNotes(html).map(n => {
    const next = n.indexOf("<b>", n.indexOf("</b>"));
    return (next > 0 ? n.slice(0, next) : n).trim();
  });
}

function mixupNotes(html: string): string[] {
  return (html.match(/<p class="mixup">[\s\S]*?<\/p>/g) ?? []).map(p =>
    p
      .replace(/^<p class="mixup">/, "")
      .replace(/<\/p>$/, "")
      .replace(/<(\/?)([a-z][a-z0-9]*)\b([^>]*)>/gi, (_, close: string, tag: string, attrs: string) => {
        const t = tag.toLowerCase();
        if (t === "b") return `<${close}b>`;
        if (t === "i") {
          if (close) return "</i>";
          const lang = attrs.match(/\blang="([a-zA-Z-]{2,20})"/);
          return lang ? `<i lang="${lang[1]}">` : "<i>";
        }
        return "";
      })
      .trim(),
  ).filter(Boolean);
}
