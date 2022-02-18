import React from 'react'
import useSpotify from './useSpotify';

function useBrowse() {
    const spotifyApi = useSpotify();
  
    const fetchCategories = async () => {
        console.log(fetchCategories)
        const catgories = await fetch(
            `https://api.spotify.com/v1/browse/categories`,
            
            {
                headers: {
                    Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                }
            }
        ).then(res => res.json());
    }
    
    return fetchCategories;
  
    
}

