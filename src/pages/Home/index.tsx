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
  const { data: promotionGames, isLoading: isLoadingPromotion } =
    useGetPromotionGamesQuery();
  const { data: upcomingGames, isLoading: isLoadingUpComing } =
    useGetUpcomingGamesQuery();

  return (
    <>
      <Banner />
      <ProductsList
        games={promotionGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingPromotion}
      />
      <ProductsList
        games={upcomingGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingUpComing}
      />
    </>
  );
};

export default Home;
