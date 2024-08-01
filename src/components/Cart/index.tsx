import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Tag from '../Tag';
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
} from './styles';
import { RootReducer } from '../../store';
import { closeCart, remove } from '../../store/reducers/cart';
import { getTotalPrice, priceMask } from '../../utilities';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeCartPopUp = () => {
    dispatch(closeCart());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const goToCheckout = () => {
    navigate('/checkout');
    closeCartPopUp();
  };
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay
        title="Clique aqui para fechar o carrinho"
        onClick={closeCartPopUp}
      />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img
                    src={item.media.thumbnail}
                    alt="Imagem da Thumbnail do jogo"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{priceMask(item.prices.current)}</span>
                  </div>
                  <button
                    title="Clique aqui para remover do carrinho"
                    type="button"
                    onClick={() => removeItem(item.id)}
                  ></button>
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total de {priceMask(getTotalPrice(items))}{' '}
              <span>Em Até 6x sem juros</span>
            </Prices>
            <Button
              title="Clique aqui para finalizar sua compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
