import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';


function login({providers}) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='spotify-logo' />
      {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="absolute top-auto w-20 h-20 bg-transparent right-10 cursor-pointer"
          >
            <ChevronDoubleRightIcon
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="w-20 h-20 animate-pulse"
              style={{ color: '#1ed760' }}
            />
          </div>
        ))}
    </div>
  )
}
/* 14038 */
export default login;

export async function getServerSideProps(){
  const providers = await getProviders();


  return{
    props: {
      providers,
    },
  };
  
}