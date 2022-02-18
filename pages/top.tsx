import { data } from 'autoprefixer';
import React from 'react'
import useSpotify from '../hooks/useSpotify';



export default function topArtists() {
      const spotifyApi = useSpotify();

      const boop = async () => {
        const artistsResponse = await fetch(`https://api.spotify.com/v1/browse/categories`, {
          headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
          }
        });
        const { items: lol } = await artistsResponse.json();

        console.log("bruh")
        console.log(artistsResponse.json())
        
        return lol
      }
      
      console.log(boop())        
       
      return(
          <div>lol</div>
       )
}
