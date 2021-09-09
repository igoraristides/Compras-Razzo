import React from "react";
import "./styles";
import Menu from "../../../components/Menu";
import { Container, Content } from "./styles";
import PropTypes from "prop-types";
import Cart from "../../../components/Cart";
import Links from "../../../components/Links";
import { Grid } from "@material-ui/core";

const Private = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

Private.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Private;
