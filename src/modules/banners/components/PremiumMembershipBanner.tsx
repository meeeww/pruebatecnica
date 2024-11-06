import { FC } from "react";

const PremiumMembershipBanner: FC = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#7953DC] to-[#3AAAD9] w-full h-[22.125rem] rounded-xl p-6 sm:p-12 lg:p-40 overflow-hidden">
      <div className="flex flex-col gap-8 max-w-md">
        <h2 className="text-[45px] font-bold text-white leading-[45px]">
          Membresía <br /> Premium
        </h2>
        <div className="flex flex-col md:flex-row gap-4 text-[#FFFFFF] w-full md:w-[20rem]">
          <button className="bg-[#FFFFFF14] font-semibold text-[13px] lg:text-[16px] leading-[22px] px-4 py-2 rounded-[2.5rem] hover:bg-[#ffffff30] transition-colors">
            Suscribirse
          </button>
          <button className="border border-[#E3E3E3] font-semibold text-[13px] lg:text-[16px] leading-[22px] px-4 py-2 rounded-[2.5rem] hover:bg-white hover:text-purple-600 transition-colors">
            Descubrir planes
          </button>
        </div>
      </div>
      
      {/* Imagen de la derecha */}
      <img
        src="/assets/banner/PrimaryBanner.svg"
        alt="Banner"
        className="hidden md:block w-[507px] h-[360px]"
      />
    </div>
  );
};

export default PremiumMembershipBanner;
