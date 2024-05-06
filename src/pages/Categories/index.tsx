import ProductsList from '../../components/ProductsList';
import Game from '../../models/Game';
import imgResident from '../../assets/images/resident.png';
import imgDiablo from '../../assets/images/diablo.png';
import imgStarWars from '../../assets/images/star_wars.png';
import imgZelda from '../../assets/images/zelda.png';

const promotionGames: Game[] = [
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgResident,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 1,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgDiablo,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 2,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgStarWars,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 3,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgZelda,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 7,
  },
];

const upcomingGames: Game[] = [
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgResident,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 4,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgDiablo,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 5,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgStarWars,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 6,
  },
  {
    category: 'Ação',
    description: 'Jogo de ação e aventura',
    image: imgZelda,
    infos: ['Singleplayer', 'Multiplayer'],
    system: 'PS4',
    title: 'God of War',
    id: 8,
  },
];

const Categories = () => (
  <>
    <ProductsList games={promotionGames} title="RPG" background="gray" />
    <ProductsList games={upcomingGames} title="Aventura" background="black" />
    <ProductsList games={promotionGames} title="Ação" background="gray" />
    <ProductsList games={upcomingGames} title="FPS" background="black" />
  </>
);

export default Categories;
