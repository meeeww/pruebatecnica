import { FC, useEffect, useState } from "react";
import axios from "axios";

type Song = {
  added_at: string;
  added_by: string;
  is_local: boolean;
  primary_color: string;
  track: {
    name: string;
    artists: { name: string; id: string }[];
    album: { name: string; images: { url: string }[] };
  };
  video_thumbnail: { url: string | null };
};

const FeaturedSongs: FC = () => {
  const [songs, setSongs] = useState<Song[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const getAccessToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";

    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID!,
      client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!,
    });

    try {
      const response = await axios.post(tokenUrl, body.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const accessToken = response.data.access_token;
      return accessToken; // Devuelve el access token para usarlo en llamadas a la API
    } catch (error) {
      console.error("Error al obtener el access token:", error);
    }
  };

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const token = await getAccessToken();
        const playlistId = "37i9dQZEVXbNFJfN1Vw8d9";

        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSongs(response.data.tracks.items);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la playlist:", error);
      }
    };

    getPlaylist();
  }, []);

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
        {loading ? (
          <div className="flex items-center justify-center w-full h-64 text-gray-100">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          songs &&
          songs.map((song: Song, index: number) => (
            <div key={index} className="flex-none w-[15.125rem] h-[18.125rem] flex flex-col gap-3 pb-4 bg-[#211626] rounded-2xl">
              <div className="relative w-full h-[12rem]">
                <img
                  src={song.track.album.images[0].url}
                  alt={song.track.album.name}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="px-4 flex flex-col gap-3">
                <h3 className="font-medium text-gray-100 tracking-wide text-2xl overflow-hidden text-ellipsis whitespace-nowrap">{song.track.name}</h3>
                <div className="flex items-center w-full gap-2 text-gray-100">
                  <img src={song.track.album.images[0].url} alt={song.track.artists[0].name} className="w-5 h-5 rounded-full" />
                  <p className="text-gray-300 font-medium text-sm">{song.track.artists[0].name}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedSongs;
