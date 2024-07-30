import { Link } from 'react-router-dom';
import {
  CartButton,
  Hamburguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMoble,
} from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { openCart } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { useState } from 'react';
const Header = () => {
  const dispatch = useDispatch();

  const openCartPopUp = () => {
    dispatch(openCart());
  };

  const { items } = useSelector((state: RootReducer) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categoria</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCartPopUp}>
          {items.length}
          <span> produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMoble className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categoria</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMoble>
    </HeaderBar>
  );
};

export default Header;
