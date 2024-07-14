import { Link } from 'react-router-dom';
import { CartButton, HeaderBar, LinkItem, Links } from './styles';
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { openCart } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();

  const openCartPopUp = () => {
    dispatch(openCart());
  };

  return (
    <HeaderBar>
      <div>
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
        0 produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  );
};

export default Header;
