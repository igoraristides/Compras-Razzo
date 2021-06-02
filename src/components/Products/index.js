import React from "react";

import PropTypes from "prop-types";
import Adicionar from "../../assets/icons/Combined Shape.png";
import Retirar from "../../assets/icons/Combined Shape2.png";

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
    Description,
} from "./styles";

const Products = ({
  width,
  storename,
  icon,
  productname,
  description,
  category,
  price,
  direction,
  time
}) => {
  return (
    <Container>
        <Content>
        <StoreName>{storename}</StoreName>
          <Row>
            <Icon src={icon} />
            <StoreBox>
              <ProductName>{productname}</ProductName>
              <Category>{category}</Category>
              <Description>{description}</Description>
              <Description>{time}</Description>
              <Price>R$ {price}</Price>
            </StoreBox>
            <ButtonAdd>
              <Icon src={Adicionar} />
              <ProductName style={{ color: "#ECEBED" }}>0</ProductName>
              <Icon src={Retirar} />
            </ButtonAdd>
            </Row>
        </Content>
    </Container>
  );
};

Products.defaultProps = {
  width: "",
  storename: "",
  icon: "",
  productname: "",
  description: "",
  category: "",
  price: "0",
  time: "",
};

Products.propTypes = {
  width: PropTypes.string,
  storename: PropTypes.string,
  icon: PropTypes.string,
  productname: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  time: PropTypes.string
};

export default Products;
