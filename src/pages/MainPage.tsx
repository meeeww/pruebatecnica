import { FC } from "react";

import PremiumMembershipBanner from "../modules/banners/components/PremiumMembershipBanner";
import MainFeaturedSongs from "../modules/music/Main";

const MainPage: FC = () => {
  return (
    <main className="flex flex-col gap-8">
      <PremiumMembershipBanner />
      <MainFeaturedSongs />
    </main>
  );
};

export default MainPage;
