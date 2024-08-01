import Button from '../Button';
import Tag from '../Tag';
import { Image, Price, Title } from './styles';
import { useGetDestaqueQuery } from '../../services/api';
import { priceMask } from '../../utilities';

const Banner = () => {
  const { data: game } = useGetDestaqueQuery();

  if (!game) return <h3>'Carregando...'</h3>;

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            De <span>{priceMask(game.prices.old)}</span>
            <br />
            por apenas {priceMask(game.prices.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  );
};

export default Banner;
