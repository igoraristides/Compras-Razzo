import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ReactComponent as Localizacao } from "../../../../assets/localizacao.svg";
import { ReactComponent as CreditCard } from "../../../../assets/valid.svg";
import { Container, BuyButton, Title, Button, DeP, DeA } from "./styles";

function Details() {
  return (
    <>
      <Container>
        <Title>Forma de Entrega</Title>
        <Button>
          <DeP>
            <h1>Correios</h1>
            <p>R$ 50,00</p>
          </DeP>
        </Button>
        <Title>Endereço de Entrega</Title>
        <Button>
          <Localizacao />
          <DeA>
            <h1>PumaVila 380, Vila Residencial A</h1>
          </DeA>
        </Button>
        <Title>Pagamento</Title>
        <Button>
          <CreditCard />
          <DeA>
            <h1>5333****8163</h1>
          </DeA>
        </Button>
      </Container>

      <BuyButton style={{ color: "#FFFFFF", background: "#249CF2" }}>
        <p>FINALIZAR A COMPRA</p>
      </BuyButton>
    </>
  );
}

export default Details;
