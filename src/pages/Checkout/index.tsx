import { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { InputGroup, Row, TabButton } from './styles';
import creditCard from '../../assets/images/creditCard.svg';
import barCode from '../../assets/images/barCode.svg';

const CheckOut = () => {
  const [payWithCard, setPayWithCard] = useState(false);

  const changePaymentMethod = () => {
    setPayWithCard(!payWithCard);
  };

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
          <TabButton
            isActive={!payWithCard}
            onClick={changePaymentMethod}
            title="Clique aqui para trocar a forma de pagamento"
          >
            <img src={barCode} alt="Imagem do codigo de barras" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={changePaymentMethod}
            title="Clique aqui para trocar a forma de pagamento"
          >
            <img src={creditCard} alt="Imagem do cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardOwnerCPF">
                      CPF do titular do cartão
                    </label>
                    <input id="cardOwnerCPF" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardName">Nome do cartão</label>
                    <input id="cardName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do Cartão</label>
                    <input id="cardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpirationMonth">
                      Mês do vencimento
                    </label>
                    <input id="cardExpirationMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpirationYear">
                      Ano do vencimento
                    </label>
                    <input id="cardExpirationYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCVV">CVV</label>
                    <input id="cardCVV" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelas</label>
                    <select id="installments">
                      <option value="1">1x de R$ 100,00</option>
                      <option value="2">2x de R$ 50,00</option>
                      <option value="3">3x de R$ 33,33</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default CheckOut;
