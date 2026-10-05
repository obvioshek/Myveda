"use client";

// Opens the browser's print dialog, where the page can also be saved as a PDF.
export default function PrintButton({ label = "Print or save as PDF" }: { label?: string }) {
  return <button type="button" className="btn btn-secondary" onClick={() => window.print()}>{label}</button>;
}
