import axios from "axios";

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

  return response.data.access_token; // Devuelve el access token para poder usar la API
};

export const fetchPlaylist = async (playListId: string) => {
  const token = await getAccessToken();

  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playListId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.tracks.items;
};