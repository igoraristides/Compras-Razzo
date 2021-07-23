import React from "react";
import "./styles";
import Menu from "../../../components/Menu";
import { ContainerMat, Content, ContainerT } from "./styles";
import PropTypes from "prop-types";
import Cart from "../../../components/Cart";
import Links from "../../../components/Links";
import { Grid } from "@material-ui/core";

const Public = ({ children }) => {
  return (
    <ContainerT>
      <ContainerMat maxWidth="xs">
        <Content>{children}</Content>
      </ContainerMat>
    </ContainerT>
  );
};

Public.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Public;
