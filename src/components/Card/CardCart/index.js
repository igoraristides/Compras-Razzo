import React, { useState } from "react";
import { useSelector } from "react-redux";
import formatReal from "../../../utils/formatReal";
import DefaultLogo from "../../../assets/icons/defaulticon.png";
import Adicionar from "../../../assets/icons/Combined Shape.png";
import Retirar from "../../../assets/icons/Combined Shape2.png";
import Excluir from "../../../assets/icons/Lixo.png";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
import masks from "../../../utils/masks";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Creators as BagActions } from "../../../store/ducks/bag";

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
  Row,
  Column,
  Description,
  ButtonIcon,
  ContainerProduct,
  ProductNameCart,
  Box,
  IconTrash,
} from "./styles";
//{data}
const CardCart = ({ data, quantity, cart }) => {
  const dispatch = useDispatch();
  const { products: bag } = useSelector((state) => state.bag);

  const quantities = bag.find(
    (element) => element.product._id === data._id
  )?.quantity;

  console.log(quantities);
  function addProduct(quantityParams) {
    const quantityAux = quantityParams || quantity;

    dispatch(BagActions.addProduct(data, quantityAux + 1));
  }

  function removeProduct(quantityParams) {
    const quantityAux = quantityParams || quantity;
    if (quantityAux < 1) {
      return;
    }

    if (quantityAux === 1) {
      dispatch(BagActions.removeProduct(data._id));
    } else {
      dispatch(BagActions.addProduct(data, quantityAux - 1));
    }
  }

  function clearProduct() {
    dispatch(BagActions.removeProduct(data._id));
  }

  const Cart = () => (
    <>
      <Container>
        <Box>
          <Content>
            <StoreName>Razzo</StoreName>
            <Row>
              <Icon
                src={data?.imgs[0]?.url}
                style={{ width: 65, height: 65 }}
              />
              <StoreBox style={{ marginLeft: "16px" }}>
                <ProductNameCart>{data?.name}</ProductNameCart>
                <Category>Pizza, Lanche e Sushi</Category>
                <Price>R$ {formatReal(data?.pricing)}</Price>
              </StoreBox>
            </Row>
          </Content>
          <ButtonAdd style={{ marginLeft: "16px" }}>
            <ButtonIcon src={Adicionar} onClick={() => addProduct()} />
            <p style={{ color: "#ECEBED" }}>{quantity}</p>
            <ButtonIcon src={Retirar} onClick={() => removeProduct()} />
          </ButtonAdd>
          <IconTrash
            src={Excluir}
            style={{ width: "22.38px" }}
            onClick={clearProduct}
          />
        </Box>
      </Container>
    </>
  );

  const Products = () => (
    <>
      <ContainerProduct>
        <Box style={{ flexDirection: "column" }}>
          <Content>
            <Column>
              <Icon src={data.imgs[0].url} style={{ height: "90px" }} />
              <StoreBox>
                <ProductName>{data.name}</ProductName>
                <Description>{data.description}</Description>
                <Description>Tempo de preparo: 55min</Description>
                <Price style={{ fontSize: "18px" }}>
                  R$ {formatReal(data?.pricing)}
                </Price>
              </StoreBox>
            </Column>
          </Content>
          <ButtonAdd
            style={{ flexDirection: "row", width: "119px", height: "40px" }}
          >
            <ButtonIcon
              src={Retirar}
              onClick={() => removeProduct(quantities)}
            />
            <p style={{ color: "#ECEBED" }}>{quantities || 0}</p>
            <ButtonIcon
              src={Adicionar}
              onClick={() => addProduct(quantities)}
            />
          </ButtonAdd>
        </Box>
      </ContainerProduct>
    </>
  );

  return (
    <>
      {cart ? (
        <>
          <Cart />
        </>
      ) : (
        <Products />
      )}
    </>
  );
};
CardCart.defaultProps = {
  cart: false,
  quantity: 0,
};

CardCart.propTypes = {
  cart: PropTypes.bool,
  quantity: PropTypes.number,
  data: PropTypes.shape({}).isRequired,
};

export default CardCart;
