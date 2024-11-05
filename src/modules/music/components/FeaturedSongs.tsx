import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const getAccessToken = async () => {
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID!,
    client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!,
  });

  const response = await axios.post(tokenUrl, body.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data.access_token; // Devuelve el access token
};

const fetchPlaylist = async () => {
  const token = await getAccessToken();
  const playlistId = "37i9dQZEVXbNFJfN1Vw8d9"; // ID de la playlist

  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.tracks.items; // Devuelve solo los elementos de la lista de pistas
};

const FeaturedSongs: FC = () => {
  const { data: songs, isLoading, error } = useQuery<Song[], Error>({
    queryKey: ["featuredSongs"], // Clave de la consulta
    queryFn: fetchPlaylist, // Obtener datos
    staleTime: 1000 * 60 * 5, // Almacenar en caché por 5m
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-20">
        <h2 className="font-semibold text-gray-100 tracking-wider text-2xl">Obras destacadas</h2>

        <nav className="flex mt-1 gap-6 font-medium text-gray-400 tracking-wider text-sm">
          <a href="#">Music</a>
          <a href="#">Collectibles</a>
          <a href="#">Utility</a>
        </nav>
      </div>

      <div className="flex gap-8 overflow-x-scroll no-scrollbar mt-4 min-w-[100%]">
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
          songs?.map((song: Song, index: number) => (
            <div key={index} className="flex-none w-[15.125rem] h-[18.125rem] flex flex-col gap-3 pb-4 bg-[#211626] rounded-2xl">
              <a href={song.track.album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[12rem]">
                  <img
                    src={song.track.album.images[0].url}
                    alt={song.track.album.name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </a>
              <div className="px-4 flex flex-col gap-3">
                <h3 className="font-medium text-gray-100 tracking-wide text-2xl overflow-hidden text-ellipsis whitespace-nowrap">{song.track.name}</h3>
                <a href={song.track.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center w-full gap-2 text-gray-100">
                    <img src={song.track.album.images[0].url} alt={song.track.artists[0].name} className="w-5 h-5 rounded-full" />
                    <p className="text-gray-300 font-medium text-sm">{song.track.artists[0].name}</p>
                  </div>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedSongs;
