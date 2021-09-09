import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

import CardCart from "../../Card/CardCart";
import formatReal from "../../../utils/formatReal";
import { useHistory } from "react-router";

import {
  Container,
  Price,
  BuyButton,
  Box,
  Text,
  PriceBox,
  PriceBoxTotal,
  EmplyBag,
  Row,
} from "./styles";
import FCard from "../../Card/FCard";

function CompletionCart() {
  const { products: bag } = useSelector((state) => state.bag);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const frete = 5000;

  function handleClick() {
    history.push(`/addCard`);
  }

  const getTotal = () => {
    const amount = bag.reduce((acc, item) => {
      const productPricing = item.product.pricing;

      const totalProduct = productPricing * item.quantity;
      acc += totalProduct;

      return acc;
    }, 0);

    return amount;
  };

  if (bag.length < 1)
    return (
      <EmplyBag>
        <span>
          <FiShoppingCart size={30} />
          Não há produtos no carrinho
        </span>
      </EmplyBag>
    );

  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={4}>
            {bag.length > 0 &&
              bag.map((element) => (
                <Grid item xs={12} key={element.product._id}>
                  <FCard
                    data={element.product}
                    quantity={element.quantity}
                    cart
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
        <Row>
          <PriceBoxTotal />
        </Row>
        <Row>
          <PriceBox>
            <Text>Subtotal:</Text>
            <Text>Entrega:</Text>
            <Text style={{ color: "#000" }}>Total:</Text>
          </PriceBox>
          <PriceBox>
            <Price style={{ color: "#000" }}>R$ {formatReal(getTotal())}</Price>
            <Price color="#000">R$ {formatReal(frete)}</Price>
            <Price>R$ {formatReal(getTotal() + frete)}</Price>
          </PriceBox>
        </Row>
      </Container>
    </>
  );
}

export default CompletionCart;
