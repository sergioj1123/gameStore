import { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { InputGroup, Row, TabButton } from './styles';
import creditCard from '../../assets/images/creditCard.svg';
import barCode from '../../assets/images/barCode.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckOut = () => {
  const [payWithCard, setPayWithCard] = useState(false);

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
      console.log(values);
    },
  });

  const changePaymentMethod = () => {
    setPayWithCard(!payWithCard);
  };

  const getErrorMessage = (field: string, message?: string) => {
    const alredyChanged = field in form.touched;
    const hasError = field in form.errors;

    if (alredyChanged && hasError) return message;
    return '';
  };

  return (
    <form className="container" onSubmit={form.handleSubmit}>
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
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
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
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
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
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
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
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail,
                )}
              </small>
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
          >
            <img src={barCode} alt="Imagem do codigo de barras" />
            Boleto bancário
          </TabButton>
          <TabButton
            isactive={payWithCard}
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
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardOwnerCPF">
                      CPF do titular do cartão
                    </label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardOwnerCPF"
                      type="text"
                      name="cardOwnerCPF"
                      value={form.values.cardOwnerCPF}
                    />
                    <small>
                      {getErrorMessage(
                        'cardOwnerCPF',
                        form.errors.cardOwnerCPF,
                      )}
                    </small>
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
                    />
                    <small>
                      {getErrorMessage('cardName', form.errors.cardName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do Cartão</label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpirationMonth">
                      Mês do vencimento
                    </label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardExpirationMonth"
                      type="text"
                      name="cardExpirationMonth"
                      value={form.values.cardExpirationMonth}
                    />
                    <small>
                      {getErrorMessage(
                        'cardExpirationMonth',
                        form.errors.cardExpirationMonth,
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpirationYear">
                      Ano do vencimento
                    </label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardExpirationYear"
                      type="text"
                      name="cardExpirationYear"
                      value={form.values.cardExpirationYear}
                    />
                    <small>
                      {getErrorMessage(
                        'cardExpirationYear',
                        form.errors.cardExpirationYear,
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCVV">CVV</label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      id="cardCVV"
                      type="text"
                      name="cardCVV"
                      value={form.values.cardCVV}
                    />
                    <small>
                      {getErrorMessage('cardCVV', form.errors.cardCVV)}
                    </small>
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
                    >
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
      <Button
        type="button"
        title="Clique aqui para finalizar a compra"
        onClick={form.handleSubmit}
      >
        Finalizar Compra
      </Button>
    </form>
  );
};

export default CheckOut;
