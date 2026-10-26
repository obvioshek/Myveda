// The kinds of problem a reader can report (actions/report.ts), shared with
// the form (components/learn/ReportProblem.tsx).
export const REPORT_KINDS = [
  "The answer or explanation is wrong",
  "A translation or reference is wrong",
  "The wording is unclear",
  "Something else",
] as const;
