import React, { useState } from "react";
import DefaultLogo from "../../../assets/icons/defaulticon.png";
import Adicionar from "../../../assets/icons/Combined Shape.png";
import Retirar from "../../../assets/icons/Combined Shape2.png";
import Excluir from "../../../assets/icons/Lixo.png";

import {
  Container,
  Content,
  Price,
  Icon,
  StoreBox,
  StoreName,
  ProductName,
  Category,
  ButtonAdd,
  BuyButton,
  Row,
  Description,
} from "./styles";
//{data}
const CardCart = ({ data }) => {
  return (
    <>
      <Container>
        <Content>
          <StoreName>RodaPizza</StoreName>
          <Row>
            <Icon src={DefaultLogo} />
            <StoreBox>
              <ProductName>Pizza picanha com cheddar</ProductName>
              <Category>Pizza</Category>
              <Price>R$ 54,32</Price>
            </StoreBox>
            <ButtonAdd>
              <Icon src={Adicionar} />
              <ProductName style={{ color: "#ECEBED" }}>0</ProductName>
              <Icon src={Retirar} />
            </ButtonAdd>
          </Row>
          <StoreName>Razzo Pizza</StoreName>
          <Row>
            <Icon src={DefaultLogo} />
            <StoreBox>
              <ProductName>Pizza picanha com cheddar</ProductName>
              <Category>Pizza</Category>
              <Price>R$ 54,32</Price>
            </StoreBox>
            <ButtonAdd>
              <Icon src={Adicionar} />
              <ProductName style={{ color: "#ECEBED" }}>0</ProductName>
              <Icon src={Retirar} />
            </ButtonAdd>
          </Row>
        </Content>
      </Container>
      <BuyButton>
        <p>Continuar comprando</p>
      </BuyButton>
      <BuyButton style={{ color: "#FFFFFF", background: "#249CF2" }}>
        <p>Confirmar a compra</p>
      </BuyButton>
    </>
  );
};

export default CardCart;
