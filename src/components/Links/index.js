import React from "react";

import { Link, useLocation } from "react-router-dom";

import { Container, Content, Img, Text } from "./styles";
import ArrowRight from "../../assets/icons/arrow.alt.right.svg";
import Carrinho from "../../assets/icons/carrinho.svg";
import ArrowLeft from "../../assets/icons/arrow.alt.down.svg";

const Links = () => {
  const { pathname } = useLocation();
  const product = pathname.split("/");

  return (
    <>
      <Container>
        {product[1] === "product" ? (
          <Link to="/">
            <Img src={ArrowLeft} />
          </Link>
        ) : (
          <div />
        )}
        <Content>
          <Link to="/">
            <Text style={{ color: "#6D5D7A" }}>Home</Text>
          </Link>
          <Img src={ArrowRight} />
          <Text style={{ color: "#249CF2" }}>Carrinho</Text>
          <Img src={Carrinho} />
        </Content>
      </Container>
    </>
  );
};

export default Links;
