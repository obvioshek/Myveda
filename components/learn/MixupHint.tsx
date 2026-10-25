// After a wrong answer: the concept's "Don't confuse it with" note, since most
// wrong answers come from mixing an idea up with its neighbour. The notes hold
// only <b> and <i> (content/learn/mixups.ts), from the chapters' own text.
export default function MixupHint({ notes }: { notes: string[] }) {
  if (!notes.length) return null;
  return (
    <div className="mx">
      <span className="mx-l">A common mix-up here</span>
      {notes.map(n => <p key={n} dangerouslySetInnerHTML={{ __html: n }} />)}
    </div>
  );
}
