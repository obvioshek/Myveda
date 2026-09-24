import Link from "next/link";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import Icon from "@/components/app/Icon";
import SignInForm from "@/components/SignInForm";
import DemoMembers from "@/components/app/DemoMembers";
import { currentMember, demoLoginEnabled } from "@/lib/app/session";
import { hasDatabase, hasSupabase } from "@/lib/backend";
import { personRef } from "@/lib/app/viewer";

export const metadata = { title: "Sign in" };

export default async function SignInPage() {
  const me = await currentMember();
  if (me) redirect(me.onboardedAt ? "/home" : "/welcome");

  const demo = hasDatabase() && demoLoginEnabled();
  const people = demo
    ? await db.orm.public.User.where(u => u.handle.isNotNull()).orderBy(u => u.createdAt.asc()).limit(12).all().toArray().catch(() => [])
    : [];

  return (
    <div className="signin">
      <div className="card">
        <Link className="brand" href="/" style={{ width: "auto" }}>
          <span className="mark"><Icon name="logo" /></span>
          <span className="word">Veda Verse</span>
        </Link>
        <h1>Sign in</h1>
        {!hasDatabase() ? (
          <p className="muted">The app needs its database. Set <code>DATABASE_URL</code>, run <code>npm run db:migrate</code> and <code>npm run db:seed</code>, then come back.</p>
        ) : (
          <>
            {hasSupabase() ? <SignInForm /> : !demo && (
              <p className="muted">Sign-in opens with the first invitations. <Link href="/#join">Join the early list</Link> and we will email you.</p>
            )}
            {demo && people.length > 0 && (
              <div className="stack" style={{ gap: 8 }}>
                <div className="kicker">{hasSupabase() ? "Or try it as a demo member" : "Try it as a demo member"}</div>
                <DemoMembers people={people.map(p => ({ ...personRef(p), line: p.line ?? "" }))} />
                <p className="muted" style={{ fontSize: 13 }}>Demo sign-in is for trying the product. It is off in production unless <code>DEMO_LOGIN=1</code>.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
