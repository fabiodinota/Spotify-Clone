import React from 'react'
import { getProviders, signIn } from "next-auth/react"


function login({providers}) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='spotify-logo' />
      {Object.values(providers).map(() => (
        <div key={providers.name}>
          <button className='bg-[#18D860] text-white p-5 rounded-full'
          onClick={() => signIn(providers.id, { callbackUrl: '/'})} >
            Login with Spotify
          </button>
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