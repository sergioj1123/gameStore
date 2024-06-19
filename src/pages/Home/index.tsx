import Banner from '../../components/Banner';
import { GalleryItem } from '../../components/Gallery';
import ProductsList from '../../components/ProductsList';
import { useEffect, useState } from 'react';

export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

const Home = () => {
  const [promotionGames, setPromotionGames] = useState<Game[]>([]);
  const [upcomingGames, setUpcomingGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromotionGames(res));

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setUpcomingGames(res));
  }, []);
  return (
    <>
      <Banner />
      <ProductsList
        games={promotionGames}
        title="Promoções"
        background="gray"
      />
      <ProductsList games={upcomingGames} title="Em Breve" background="black" />
    </>
  );
};

export default Home;
