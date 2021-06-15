import React from "react";

import { Container, Content, Img, Text } from "./styles";
import ArrowRight from "../../assets/icons/arrow.alt.right.svg"
import ArrowLeft from "../../assets/icons/arrow.alt.down.svg"

const Links = () => {
  return (
    <>
      <Container>
      <Img src = {ArrowLeft}/>
          <Content>
          <Text   style={{ color: "#6D5D7A" }}  >Home</Text>
          <Img src = {ArrowRight}/>
          <Text style={{ color: "#249CF2" }}>Sacola</Text>
        </Content>
      </Container>
      
    </>
  );
};

export default Links;

//<Img src = {ArrowLeft} />