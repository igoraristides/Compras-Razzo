import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

import CardCart from "../Card/CardCart";
import formatReal from "../../utils/formatReal";

import {
  Container,
  Price,
  BuyButton,
  Box,
  Text,
  PriceBox,
  PriceBoxTotal,
  EmplyBag,
} from "./styles";

function Cart() {
  const { products: bag } = useSelector((state) => state.bag);
  const [loading, setLoading] = useState(false);

  const frete = 500;
  console.log(bag);

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
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
                  <CardCart
                    data={element.product}
                    quantity={element.quantity}
                    cart
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
        <PriceBox>
          <Text>Subtotal:</Text>
          <Price style={{ color: "#000" }}>R$ {formatReal(getTotal())}</Price>
        </PriceBox>
        <PriceBox>
          <Text>Entrega:</Text>
          <Price color="#000">R$ {formatReal(frete)}</Price>
        </PriceBox>
        <PriceBoxTotal>
          <Text style={{ color: "#000" }}>Total:</Text>
          <Price>R$ {formatReal(getTotal() + frete)}</Price>
        </PriceBoxTotal>
      </Container>
      <BuyButton onClick={handleClick}>
        <p>Continuar comprando</p>
      </BuyButton>
      <BuyButton
        style={{ color: "#FFFFFF", background: "#249CF2" }}
        onClick={handleClick}
      >
        <p>Confirmar a compra</p>
      </BuyButton>
    </>
  );
}

export default Cart;
