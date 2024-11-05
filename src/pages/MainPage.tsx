import { FC } from "react";

import PremiumMembershipBanner from "../modules/banners/components/PremiumMembershipBanner";
import FeaturedSongs from "../modules/music/components/FeaturedSongs";

const MainPage: FC = () => {
  return (
    <main className="flex flex-col gap-8">
      <PremiumMembershipBanner />
      <FeaturedSongs />
    </main>
  );
};

export default MainPage;
