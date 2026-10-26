// While a community screen is fetched, its frame stays and the content area
// shows the shape of what is coming, instead of the old screen sitting still.
export default function Loading() {
  return (
    <div className="sk-feed" aria-busy="true">
      <p className="sr-only" role="status">Loading…</p>
      <span className="sk sk-title" aria-hidden="true" />
      {[0, 1, 2].map(i => (
        <div key={i} className="sk-post" aria-hidden="true">
          <span className="sk sk-meta" />
          <span className="sk sk-h" />
          <span className="sk sk-line" />
          <span className="sk sk-line" />
          <span className="sk sk-line short" />
        </div>
      ))}
    </div>
  );
}
