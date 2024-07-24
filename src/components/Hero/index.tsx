import { Banner, Infos } from './styles';
import Tag from '../Tag';
import Button from '../Button';
import { Game } from '../../pages/Home';
import { priceMask } from '../ProductsList';
import { useDispatch } from 'react-redux';
import { addToCart, openCart } from '../../store/reducers/cart';

type Props = {
  game: Game;
};

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(game));
    dispatch(openCart());
  };

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
              <span className="normal-price">
                Por {priceMask(game.prices.current)}
              </span>
            )}
          </p>
          {game.prices.discount && (
            <Button
              title="Clique aqui para adicionar esse jogo ao carrinho"
              type="button"
              variant="primary"
              onClick={addItemToCart}
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
