import { currentMember, demoLoginEnabled } from "@/lib/app/session";
import { hasSupabase } from "@/lib/backend";

// Who is asking, for the landing page's optional "Sign in" link (a signed-in
// member is offered the community instead). The landing
// page itself is static so search engines get fast, cached HTML; it asks this
// route from the browser instead. Never cached, and never an error: with no
// session or no sign-in configured, the answer is simply no account.
export const dynamic = "force-dynamic";

export async function GET() {
  let account: { href: string; label: string } | null = null;
  try {
    const me = await currentMember();
    if (me) account = { href: me.onboardedAt ? "/home" : "/welcome", label: "Community" };
    else if (hasSupabase() || demoLoginEnabled()) account = { href: "/signin", label: "Sign in" };
  } catch (err) {
    console.error("[account] could not tell who is asking:", err);
  }
  return Response.json({ account }, { headers: { "Cache-Control": "private, no-store" } });
}
