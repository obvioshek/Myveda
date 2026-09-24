import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import Shell from "@/components/app/Shell";
import { requireMember } from "@/lib/app/session";
import { personRef, viewerContext } from "@/lib/app/viewer";
import { now } from "@/lib/app/time";

// Every signed-in screen: header, rail, mobile nav, and the composer.
export default async function ShellLayout({ children }: { children: React.ReactNode }) {
  const me = await requireMember();
  if (!me.onboardedAt) redirect("/welcome");
  const v = await viewerContext(me);
  const [topics, unread] = await Promise.all([
    db.orm.public.Topic.orderBy(t => t.name.asc()).all(),
    db.orm.public.Notification
      .where(n => n.userId.eq(me.id))
      .where(n => n.readAt.isNull())
      .where(n => n.deliverAt.lte(now()))
      .first(),
  ]);
  const circles = v.circles.map(c => ({ name: c.name, slug: c.slug }));
  return (
    <Shell
      me={personRef(me)}
      circles={circles}
      hasUnread={!!unread}
      topics={topics.map(t => t.name)}
      audiences={[{ value: "public", label: "Public · topic" }, ...circles.map(c => ({ value: c.slug, label: c.name }))]}
    >
      {children}
    </Shell>
  );
}
