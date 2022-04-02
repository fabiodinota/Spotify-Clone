import Head from 'next/head';
import { getSession } from 'next-auth/react';
import Center from '../components/Center.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Player from '../components/Player.jsx';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Vibify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}