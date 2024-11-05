import { FC } from "react";

const PremiumMembershipBanner: FC = () => {
  return (
    <div className="flex w-full h-full">
      <img src="/assets/PremiumMembershipBanner.svg" alt="Banner" className="w-full h-[18.5vw] object-cover rounded-xl" />
    </div>
  );
};

export default PremiumMembershipBanner;
