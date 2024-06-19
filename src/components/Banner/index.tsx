import { useEffect, useState } from 'react';
import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';
import { Image, Price, Title } from './styles';
import { priceMask } from '../ProductsList';

const Banner = () => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, []);

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
