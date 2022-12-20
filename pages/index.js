import Head from 'next/head';
import { useEffect, useState } from 'react';
import HomeLayout from '../components/layouts/HomeLayout';
import Card from '../components/ui/Card';

const BASE_URL = `https://api.unsplash.com/search/photos/`;

export default function Home() {
  // ------- States -------
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // ------- Functions -------
  /**
   * Fetch images from the Unsplash API and append the results to your `images` array
   */
  const fetchImages = async () => {
    const response = await fetch(`${BASE_URL}?query=tea&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
      },
    });
    const { results } = await response.json();
    setImages((prev) => [...prev, ...results]);
  };

  /**
   * useEffect to trigger the `fetchImages` function whenever `page` updates
   */
  useEffect(() => {
    fetchImages();
  }, [page]);

  // ------- Render -------
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
        {images.map((image, index) => (
          <Card
            key={image.id}
            imgSrc={image.urls.regular}
            imgAlt={image.alt_description}
            shotBy={image.user.name}
            creditUrl={image.links.html}
            isLast={index === images.length - 1}
            newLimit={() => setPage(page + 1)}
          />
        ))}
      </HomeLayout>
    </>
  );
}
