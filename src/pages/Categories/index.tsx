import ProductsList from '../../components/ProductsList';
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from '../../services/api';

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery();

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  );
};
export default Categories;
