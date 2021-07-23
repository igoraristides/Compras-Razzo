import styled from "styled-components";

import { Container } from "@material-ui/core";
import Background from "../../../assets/background.svg";

export const ContainerMat = styled(Container)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  margin-top: auto;
`;
export const ContainerT = styled.div`
  background: url(${Background}) no-repeat;
  background-position: top center;

  display: flex;
  width: 100%;
`;

export const Content = styled.div``;
