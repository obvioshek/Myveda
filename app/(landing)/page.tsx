import SiteChrome from "@/components/SiteChrome";
import SettingsSheet from "@/components/SettingsSheet";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import HouseSection from "@/components/HouseSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import JoinSection from "@/components/JoinSection";
import ClosingSection from "@/components/ClosingSection";
import { getProfile } from "@/actions/profile";
import { loadHomeContent } from "@/lib/content";
import { hasDatabase, hasSupabase } from "@/lib/backend";
import { getCurrentUser } from "@/utils/supabase/server";

export default async function Home() {
  const [user, profile, content] = await Promise.all([
    getCurrentUser(),
    getProfile(),
    loadHomeContent(),
  ]);
  const signInOpen = hasSupabase();
  const account = user ? { email: user.email ?? null } : null;

  return (
    <>
      <SiteChrome user={account} signInOpen={signInOpen} appOpen={hasDatabase()} />
      <SettingsSheet user={account} profile={profile} signInOpen={signInOpen} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ExploreSection
          initialPosts={content.personalItems}
          initialOrgPosts={content.orgItems}
          live={content.live}
        />
        <WhySection />
        <HowSection reels={content.reels} live={content.live} />
        <CommunitiesSection />
        <HouseSection />
        <PrinciplesSection />
        <JoinSection />
        <ClosingSection />
      </main>
    </>
  );
}
