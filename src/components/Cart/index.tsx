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

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src="https://via.placeholder.com/50" alt="Product" />
            <div>
              <h3>Nome</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 250,00</span>
            </div>
            <button
              title="Clique aqui para remover do carrinho"
              type="button"
            ></button>
          </CartItem>
          <CartItem>
            <img src="https://via.placeholder.com/50" alt="Product" />
            <div>
              <h3>Nome</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 250,00</span>
            </div>
            <button
              title="Clique aqui para remover do carrinho"
              type="button"
            ></button>
          </CartItem>
        </ul>
        <Quantity>jogos</Quantity>
        <Prices>
          Total <span>Em Até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para finalizar sua compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
