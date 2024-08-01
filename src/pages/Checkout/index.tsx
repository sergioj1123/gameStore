import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { InputGroup, Row, TabButton } from './styles';
import creditCard from '../../assets/images/creditCard.svg';
import barCode from '../../assets/images/barCode.svg';
import { usePurchaseMutation } from '../../services/api';
import { RootReducer } from '../../store';
import { getTotalPrice, priceMask } from '../../utilities';
import { clear } from '../../store/reducers/cart';

type Installments = {
  quantity: number;
  amount: number;
  formatedAmount: string;
};

const CheckOut = () => {
  const [payWithCard, setPayWithCard] = useState(false);
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [installments, setInstallments] = useState<Installments[]>([]);
  const dispatch = useDispatch();
  const totalPrice = getTotalPrice(items);

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cardOwnerCPF: '',
      cardName: '',
      cardNumber: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      cardCVV: '',
      installments: 1,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Nome completo é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
      cpf: Yup.string().min(11, 'CPF inválido').required('CPF é obrigatório'),
      deliveryEmail: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Emails não conferem')
        .required('Email é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(5, 'O nome deve ter pelo menos 5 caracteres')
              .required('Nome completo é obrigatório')
          : schema,
      ),

      cardOwnerCPF: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.min(11, 'CPF inválido').required('CPF é obrigatório')
          : schema,
      ),
      cardName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Nome do cartão é obrigatório') : schema,
      ),

      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(16, 'Número do cartão inválido')
              .required('Número do cartão é obrigatório')
          : schema,
      ),

      cardExpirationMonth: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.min(2, 'Mês inválido').required('Mês é obrigatório')
          : schema,
      ),

      cardExpirationYear: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.min(2, 'Ano inválido').required('Ano é obrigatório')
          : schema,
      ),

      cardCVV: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.min(3, 'CVV inválido').required('CVV é obrigatório')
          : schema,
      ),

      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Parcelas é obrigatório') : schema,
      ),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          card: {
            active: payWithCard,
            code: Number(values.cardCVV),
            expires: {
              month: values.cardExpirationMonth,
              year: values.cardExpirationYear,
            },
            name: values.cardName,
            number: values.cardNumber,
            owner: {
              document: values.cardOwnerCPF,
              name: values.cardOwner,
            },
          },
          installments: Number(values.installments),
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number,
        })),
      });
    },
  });

  const changePaymentMethod = () => {
    setPayWithCard(!payWithCard);
  };

  const checkInputHasError = (field: string) => {
    const alredyChanged = field in form.touched;
    const hasError = field in form.errors;
    return alredyChanged && hasError;
  };

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = [];
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formatedAmount: priceMask(totalPrice / i),
        });
      }
      return installmentsArray;
    };
    if (totalPrice > 0) {
      setInstallments(calculateInstallments());
    }
  }, [totalPrice]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  if (items.length === 0 && !isSuccess) return <Navigate to="/" />;

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId}
              <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </InputGroup>
              </Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <Row>
                <InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <div>
              <TabButton
                isactive={!payWithCard}
                onClick={changePaymentMethod}
                title="Clique aqui para trocar a forma de pagamento"
                type="button"
              >
                <img src={barCode} alt="Imagem do codigo de barras" />
                Boleto bancário
              </TabButton>
              <TabButton
                isactive={payWithCard}
                onClick={changePaymentMethod}
                title="Clique aqui para trocar a forma de pagamento"
                type="button"
              >
                <img src={creditCard} alt="Imagem do cartão de crédito" />
                Cartão de crédito
              </TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardOwner"
                          type="text"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardOwnerCPF">
                          CPF do titular do cartão
                        </label>
                        <InputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardOwnerCPF"
                          type="text"
                          name="cardOwnerCPF"
                          value={form.values.cardOwnerCPF}
                          className={
                            checkInputHasError('cardOwnerCPF') ? 'error' : ''
                          }
                          mask="999.999.999-99"
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup>
                        <label htmlFor="cardName">Nome do cartão</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardName"
                          type="text"
                          name="cardName"
                          value={form.values.cardName}
                          className={
                            checkInputHasError('cardName') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardNumber">Número do Cartão</label>
                        <InputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="cardExpirationMonth">
                          Mês do vencimento
                        </label>
                        <InputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardExpirationMonth"
                          type="text"
                          name="cardExpirationMonth"
                          value={form.values.cardExpirationMonth}
                          className={
                            checkInputHasError('cardExpirationMonth')
                              ? 'error'
                              : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="cardExpirationYear">
                          Ano do vencimento
                        </label>
                        <InputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardExpirationYear"
                          type="text"
                          name="cardExpirationYear"
                          value={form.values.cardExpirationYear}
                          className={
                            checkInputHasError('cardExpirationYear')
                              ? 'error'
                              : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="48px">
                        <label htmlFor="cardCVV">CVV</label>
                        <InputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardCVV"
                          type="text"
                          name="cardCVV"
                          value={form.values.cardCVV}
                          className={
                            checkInputHasError('cardCVV') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelas</label>
                        <select
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              key={installment.quantity}
                              value={installment.quantity}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formatedAmount}
                            </option>
                          ))}
                        </select>
                      </InputGroup>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </div>
          </Card>
          <Button
            type="submit"
            title="Clique aqui para finalizar a compra"
            onClick={form.handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processando...' : 'Finalizar Compra'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default CheckOut;
