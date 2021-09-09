import React, { useState, useRef, useEffect } from "react";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import yupValidate from "../../utils/yupValidate";
import validCardSchema from "../../validators/validCard.schema";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  Container,
  BoxForm,
  Inputs,
  Buttons,
  TitlePage,
  SubTitlePage,
} from "./styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const CreditCard = () => {
  const [loadingInner, setLoadingInner] = useState(false);
  const [card, setCard] = useState();
  const formRef = useRef(null);
  const history = useHistory();

  const [infoCard, setInfoCard] = useState({
    SecurityCode: "",
    ExpirationDate: "",
    focus: "",
    Holder: "",
    CardNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInfoCard({
      ...infoCard,
      [name]: value,
    });
  };

  const handleSubmit = async (formData) => {
    try {
      setLoadingInner(true);
      const data = { ...formData };
      setCard(data);
      toast.success("Cartão adicionado com sucesso");
      history.push(`/finalizingOrder`);
    } catch (error) {
      toast.error("Ocorreu um erro! verifique os dados e tente novamento");
    } finally {
      setLoadingInner(false);
    }
  };

  return (
    <Container>
      <BoxForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TitlePage>Adicionar cartão</TitlePage>

          <div id="PaymentForm">
            <Cards
              name={infoCard.Holder}
              cvc={infoCard.SecurityCode}
              expiry={infoCard.ExpirationDate}
              focused={infoCard.focus}
              number={infoCard.CardNumber}
            />
          </div>
          <Inputs>
            <Input
              label="Número do cartão"
              name="CardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              variant="border"
              mask="creditOrDebitCard"
              fullWidth
              id="number-card"
              onChange={handleInputChange}
            />

            <Input
              label="Nome do titular"
              name="Holder"
              placeholder="Nome como no cartão"
              variant="border"
              fullWidth
              onChange={handleInputChange}
            />

            <Input
              label="Data de validade"
              name="ExpirationDate"
              placeholder="MM/AAAA"
              variant="border"
              fullWidth
              onChange={handleInputChange}
              mask="creditOrDebitCardExpiry"
            />
            <Input
              label="CVV"
              name="SecurityCode"
              placeholder="CVV"
              variant="border"
              fullWidth
              mask="number"
              className="input-number"
              onChange={handleInputChange}
            />
            <Buttons>
              <div>
                <Button
                  type="button"
                  label="Voltar"
                  onClick={() => window.history.back()}
                  fullWidth
                  loading={loadingInner}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  label="Salvar e Continuar"
                  fullWidth
                  loading={loadingInner}
                />
              </div>
            </Buttons>
          </Inputs>
        </Form>
      </BoxForm>
    </Container>
  );
};

export default CreditCard;
