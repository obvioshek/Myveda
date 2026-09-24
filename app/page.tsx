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
import { buildFeedSession, fetchFeed } from "@/actions/feed";
import { fetchReels } from "@/actions/reel";
import { getProfile } from "@/actions/profile";

import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = await getProfile();

  const sessionId = await buildFeedSession();
  const { personalItems, orgItems } = await fetchFeed(sessionId);
  
  const reels = await fetchReels();

  return (
    <>
      <SiteChrome user={user} />
      <SettingsSheet user={user} profile={profile} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ExploreSection initialPosts={personalItems} initialOrgPosts={orgItems} />
        <WhySection />
        <HowSection reels={reels} />
        <CommunitiesSection />
        <HouseSection />
        <PrinciplesSection />
        <JoinSection />
        <ClosingSection />
      </main>
    </>
  );
}
