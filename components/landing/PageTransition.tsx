import { ViewTransition } from "react";

// A page's content, named for the browser's view transitions: on a move from
// one page to another, the page leaving fades and the one arriving rises into
// place (the classes are animated under "Finish" in landing.css). Each page
// carries its own, since a layout stays put between pages and would never
// enter or leave. Browsers without view transitions change pages as before.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <ViewTransition enter="page-in" exit="page-out" default="none">{children}</ViewTransition>;
}
