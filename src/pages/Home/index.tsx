import Banner from '../../components/Banner';
import { GalleryItem } from '../../components/Gallery';
import ProductsList from '../../components/ProductsList';

import {
  useGetPromotionGamesQuery,
  useGetUpcomingGamesQuery,
} from '../../services/api';

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
  const { data: promotionGames } = useGetPromotionGamesQuery();
  const { data: upcomingGames } = useGetUpcomingGamesQuery();

  if (promotionGames && upcomingGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={promotionGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={upcomingGames}
          title="Em Breve"
          background="black"
          id="coming-soon"
        />
      </>
    );
  }
  return <h3>'Carregando...'</h3>;
};

export default Home;
