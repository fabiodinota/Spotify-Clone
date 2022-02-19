import SpotifyWebApi from "spotify-web-api-node";
import useSpotify from "../hooks/useSpotify";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(',')

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export const test = async () =>  {
    const spotifyApi = useSpotify();
    
  
      return fetch(
            `https://api.spotify.com/v1/me/top/tracks`,
            
            {
                headers: {
                    Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                }
            }
        );
        
}



export default spotifyApi;

export { LOGIN_URL }; /* 1:25:36 */