import { Game } from '../../pages/Home';
import Product from '../Product';
import { Container, List } from './styles';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  games: Game[];
  id?: string;
};

export const priceMask = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const ProductsList = ({ title, background, games, id }: Props) => {
  const getGamesTag = (game: Game) => {
    const tags = [];
    if (game.release_date) {
      tags.push(game.release_date);
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(priceMask(game.prices.current));
    }
    return tags;
  };
  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              id={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGamesTag(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;
