import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';

import {
  useGetPromotionGamesQuery,
  useGetUpcomingGamesQuery,
} from '../../services/api';

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
