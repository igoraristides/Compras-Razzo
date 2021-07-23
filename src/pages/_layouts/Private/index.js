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
      <Content>
        <Links />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {children}
          </Grid>
          <Grid item xs={12} md={4}>
            <Cart cart />
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

Private.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Private;
