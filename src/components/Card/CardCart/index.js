import React, { useState } from "react";
import DefaultLogo from "../../../assets/icons/defaulticon.png";
import Adicionar from "../../../assets/icons/Combined Shape.png";
import Retirar from "../../../assets/icons/Combined Shape2.png";
import Excluir from "../../../assets/icons/Lixo.png";

import Product from "../../Products/index";

import { Container, BuyButton } from "./styles";
//{data}
const CardCart = ({ data, cart }) => {
  const Cart = () => (
    <Product
      storename="RodaPizza1"
      icon={DefaultLogo}
      productname="Pizza picanha com cheddar"
      category="Pizza"
      price="54,32"
      direction="row"
    />
  );

  const Products = () => (
    <Product
      storename="RodaPizza2"
      icon={data.imgs[0].url}
      productname={data.name}
      description={data.description}
      price={data.pricing}
      direction="column"
      time="55 min"
    />
  );

  return (
    <>
      <Container>
        {cart ? (
          <>
            <Cart />
          </>
        ) : (
          <Products />
        )}
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
