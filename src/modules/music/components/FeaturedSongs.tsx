import { FC } from "react";

const FeaturedSongs: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-20">
        <h2>Obras destacadas</h2>

        <nav className="flex gap-6">
          <p>Music</p>
          <p>Collectibles</p>
          <p>Utility</p>
        </nav>
      </div>

      <div className="flex">
        <div>
          <h3>Jaime Cantante</h3>
          <p>@johnti60</p>
        </div>
        <div>
          <h3>Jaime Cantante</h3>
          <p>@johnti60</p>
        </div>
        <div>
          <h3>Jaime Cantante</h3>
          <p>@johnti60</p>
        </div>
        <div>
          <h3>Jaime Cantante</h3>
          <p>@johnti60</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSongs;
