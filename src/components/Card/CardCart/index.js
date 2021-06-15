import React, { useState } from "react";
import DefaultLogo from "../../../assets/icons/defaulticon.png";
import Adicionar from "../../../assets/icons/Combined Shape.png";
import Retirar from "../../../assets/icons/Combined Shape2.png";
import Excluir from "../../../assets/icons/Lixo.png";
import { toast } from 'react-toastify';
import masks from "../../../utils/masks";
import { useSelector } from 'react-redux';


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
  PriceBox,
  PriceBoxTotal,
} from "./styles";
//{data}
const CardCart = ({ data, cart }) => {
  const [showProducts, setShowProducts] = useState([]);
  const [countproduct, setCountProduct] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);
  const [addonsCart, setAddonsCart] = useState([]);

  const dispatch = useDispatch();

  
  const handleClick = async () => {
    try {

     dispatch(addProduct({ ...data }, addonsCart, countproduct));

      setCountProduct(1);

      toast.success('Produto adicionado na sacola');
    } catch (error) {
      console.log(error);
      toast.error('Não foi possível adicionar seu item à sacola');
    }
  }

  const addProductQuantity = useCallback(() => {
    setCountProduct(countproduct + 1);
  }, [countproduct]);

  const removeProduct = useCallback(() => {
    if (
      countproduct === 0
        ? setCountProduct(0)
        : setCountProduct(countproduct - 1)
    );
  }, [countproduct]);


  const Cart = () => (
    <>
      <Container>
        <Box>
          <Content>
            <StoreName>RodaPizza</StoreName>
            <Row>
              <Icon src={DefaultLogo} style={{ width: 65, height: 65 }} />
              <StoreBox style={{ marginLeft: "16px" }}>
                <ProductNameCart>Pizza picanha com cheddar</ProductNameCart>
                <Category>Pizza</Category>
                <Price>R$ 54,32</Price>
              </StoreBox>
            </Row>
          </Content>
          <ButtonAdd style={{ marginLeft: "16px" }}>
            <ButtonIcon src={Adicionar} />
            <p style={{ color: "#ECEBED" }}>0</p>
            <ButtonIcon src={Retirar} />
          </ButtonAdd>
          <IconTrash src={Excluir} style={{ width: "22.38px" }} />
        </Box>
        <PriceBox>
          <Text>Subtotal:</Text>
          <Price style={{ color: "#000" }}>R$ 200,04</Price>
        </PriceBox>
        <PriceBox>
          <Text>Entrega:</Text>
          <Price color = "#000" >R$ 7,90</Price>
        </PriceBox>
        <PriceBoxTotal>
          <Text style={{ color: "#000" }}>Total:</Text>
          <Price>R$ 212,22</Price>
        </PriceBoxTotal>
      </Container>
      <BuyButton>
        <p>Continuar comprando</p>
      </BuyButton>
      <BuyButton style={{ color: "#FFFFFF", background: "#249CF2" }}>
        <p>Confirmar a compra</p>
      </BuyButton>
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
                  R$ {masks.currency(data.pricing)}
                </Price>
              </StoreBox>
            </Column>
          </Content>
          <ButtonAdd
            style={{ flexDirection: "row", width: "119px", height: "40px" }}
          >
            <ButtonIcon src={Adicionar} />
            <p style={{ color: "#ECEBED" }}>{length}</p>
            <ButtonIcon src={Retirar} />
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

export default CardCart;
