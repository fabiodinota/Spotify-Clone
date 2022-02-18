import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import SpotifyApi from '../lib/spotify';

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }

      SpotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return SpotifyApi;
}

export default useSpotify;