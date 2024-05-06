import Product from '../Product';
import { Container, List } from './styles';

export type Props = {
  title: string;
  background: 'gray' | 'black';
};

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>Products List</h2>
      <List>
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo 1"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo 2"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo 3"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do Jogo 4"
        />
      </List>
    </div>
  </Container>
);

export default ProductsList;
