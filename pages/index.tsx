import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {getSession} from 'next-auth/react';
import React from 'react';
import Sidebar from '../Components/Sidebar';
import AppContent from '../Components/AppContent';
import Player from '../Components/Player';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <AppContent />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {session},
  };
};