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
  BuyButton,
  ProductNameCart,
  Box,
  IconTrash,
  Text,
  ButtonsContent,
  PriceBoxTotal,
  EmplyBag,
} from "./styles";
//{data}
const FCard = ({ data, quantity, cart }) => {
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
          <ButtonsContent>
            <ButtonAdd style={{ marginLeft: "100px" }}>
              <ButtonIcon src={Adicionar} onClick={() => addProduct()} />
              <p style={{ color: "#ECEBED" }}>{quantity}</p>
              <ButtonIcon src={Retirar} onClick={() => removeProduct()} />
            </ButtonAdd>
            <IconTrash
              src={Excluir}
              style={{ width: "22.38px" }}
              onClick={clearProduct}
            />
          </ButtonsContent>
        </Box>
      </Container>
    </>
  );

  return (
    <>
      <Cart />
    </>
  );
};
FCard.defaultProps = {
  cart: false,
  quantity: 0,
};

FCard.propTypes = {
  cart: PropTypes.bool,
  quantity: PropTypes.number,
  data: PropTypes.shape({}).isRequired,
};

export default FCard;
