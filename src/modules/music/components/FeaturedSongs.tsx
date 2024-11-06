import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaylist } from "../services/spotifyService";

type Song = {
  added_at: string;
  added_by: string;
  is_local: boolean;
  primary_color: string;
  track: {
    name: string;
    artists: { name: string; id: string; external_urls: { spotify: string } }[];
    album: { name: string; images: { url: string }[]; external_urls: { spotify: string } };
  };
  video_thumbnail: { url: string | null };
};

interface FeaturedSongsProps {
  playListId: string;
}

const FeaturedSongs: FC<FeaturedSongsProps> = ({ playListId }) => {
  const {
    data: songs,
    isLoading,
    error,
  } = useQuery<Song[], Error>({
    queryKey: ["featuredSongs", playListId],
    queryFn: () => fetchPlaylist(playListId),
    staleTime: 1000 * 60 * 5, // Almacenar en caché por 5m
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-64 text-gray-100">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : error ? (
        <div className="text-red-500">Error al obtener la playlist: {error.message}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 gap-y-20 w-full justify-center mx-auto pb-20">
          {songs?.map((song: Song, index: number) => (
            <div key={index} className="w-full h-[20rem] flex flex-col gap-3 pb-4 bg-[#211626] rounded-2xl relative">
              <a href={song.track.album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[12rem] rounded-t-lg overflow-hidden ">
                  <img src="/icons/Play.svg" alt="Play" className="absolute z-10 w-8 h-8 opacity-80 right-0 m-4 "/>
                  <img
                    src={song.track.album.images[0].url}
                    alt={song.track.album.name}
                    className="absolute top-0 left-0 w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
              </a>
              <div className="px-4 flex flex-col gap-3">
                <h3 className="font-medium text-gray-100 tracking-wide text-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{song.track.name}</h3>
                <a href={song.track.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center w-full gap-2 text-gray-100">
                    <img src={song.track.album.images[0].url} alt={song.track.artists[0].name} className="w-5 h-5 rounded-full" />
                    <p className="text-gray-300 font-medium text-[13px]">{song.track.artists[0].name}</p>
                  </div>
                </a>
              </div>

              {/* Debajo de la tarjeta */}
              {index == 0 ? (
                <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-[#2E1A33] w-[90%] h-12 rounded-full flex items-center justify-around">
                  <button className="text-white">
                    <img src="/icons/Handshake.svg" alt="Compartir" className="w-6 h-6 hover:scale-110 transition-transform" />
                  </button>
                  <button className="text-white">
                    <img src="/icons/ShoppingCart.svg" alt="Comprar" className="w-6 h-6 hover:scale-110 transition-transform" />
                  </button>
                  <button className="text-white">
                    <img src="/icons/Heart.svg" alt="Me gusta" className="w-6 h-6 hover:scale-110 transition-transform" />
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedSongs;
