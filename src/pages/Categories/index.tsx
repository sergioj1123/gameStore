import ProductsList from '../../components/ProductsList';
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from '../../services/api';

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: sportsGames } = useGetSportGamesQuery();
  const { data: rpgGames } = useGetRpgGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();
  const { data: fightGames } = useGetFightGamesQuery();

  if (actionGames && sportsGames && rpgGames && simulationGames && fightGames) {
    return (
      <>
        <ProductsList games={sportsGames} title="Esportes" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    );
  }
  <h4>Carregando...</h4>;
};
export default Categories;
