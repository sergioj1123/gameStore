import { Banner, Infos } from './styles';
import Tag from '../Tag';
import Button from '../Button';
import { Game } from '../../pages/Home';
import { priceMask } from '../ProductsList';

type Props = {
  game: Game;
};

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceMask(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <span>Por {priceMask(game.prices.current)}</span>
            )}
          </p>
          {game.prices.discount && (
            <Button
              title="Clique aqui para adicionar esse jogo ao carrinho"
              type="button"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  );
};

export default Hero;
