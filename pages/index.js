import Head from 'next/head';
import HomeLayout from '../components/layouts/HomeLayout';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinitea</title>
        <meta name="description" content="Lotta tea pictures from Unsplash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home */}
      <HomeLayout>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeLayout>
    </>
  );
}
