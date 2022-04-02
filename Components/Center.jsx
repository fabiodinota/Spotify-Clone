import React, { useEffect, useState}  from 'react'
import { signOut, useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from 'lodash'
import { useRecoilState } from 'recoil';
import {  playlistIdState, playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from './Songs';
import Image from 'next/image';


const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
]

function Center() {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [color, setColor] = useState(null);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
    const [playlist, setPlaylist] = useRecoilState(playlistState)

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])


    useEffect(() => {
        spotifyApi
          .getPlaylist(playlistId)
          .then((data) => {
            setPlaylist(data.body)
          })
          .catch((err) => console.log('Something went wrong!', err));
      }, [spotifyApi, playlistId]);

    console.log(playlist)

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
        <header className='absolute top-5 right-8'>
            <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white' >
                <Image className='rounded-full' width={40} height={40} src={session?.user.image} alt="pfp" />
                <h2>{session?.user.name}</h2>
                <ChevronDownIcon className='w-5 h-5'  onClick={() => signOut()} />
            </div>
        </header>
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
            <Image className='shadow-2xl' height={176} width={176} src={playlist?.images?.[0]?.url} alt="" />
            <div>
                <p>PLAYLIST</p>
                <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>{playlist?.name}</h1>
            </div>
            
        </section>
        <div>
            <Songs />
        </div>
    </div>
  )
}

export default Center