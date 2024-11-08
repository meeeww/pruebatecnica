import { FC } from "react";
import FeaturedSongs from "./components/FeaturedSongs";

const MainFeaturedSongs: FC = () => {
  const playListId = "37i9dQZEVXbNFJfN1Vw8d9";
  
  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex items-center gap-20">
        <h2 className="font-semibold text-gray-100 tracking-wider text-2xl">Obras destacadas</h2>

        <nav className="flex flex-col sm:flex-row mt-1 gap-6 font-medium text-gray-400 tracking-wider text-sm">
          <a href="#" className="hover:text-gray-100 transition-colors">Music</a>
          <a href="#" className="hover:text-gray-100 transition-colors">Collectibles</a>
          <a href="#" className="hover:text-gray-100 transition-colors">Utility</a>
        </nav>
      </div>

      <div className="flex gap-8 overflow-x-scroll no-scrollbar mt-4 min-w-[100%] pb-1">
        <FeaturedSongs playListId={playListId} />
      </div>
    </div>
  );
};

export default MainFeaturedSongs;
