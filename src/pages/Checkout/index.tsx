import Button from '../../components/Button';
import Card from '../../components/Card';
import { InputGroup, Row } from './styles';

const CheckOut = () => {
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input id="deliveryEmail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
              <input id="confirmDeliveryEmail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nostrum obcaecati, rerum consequuntur optio accusamus officiis
            sapiente deserunt saepe impedit dignissimos culpa eligendi atque, at
            dicta? Vero perferendis molestias temporibus.
          </p>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default CheckOut;
