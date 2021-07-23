import styled, { css } from "styled-components";
import Form from "../Form";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0 25px;

  position: fixed;
  width: 100%;

  background-color: #f7f9fc;

  z-index: 100;
`;

export const Navigation = styled.nav`
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  height: 80px;
  justify-content: space-between;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  margin: auto 0px;
  margin-right: 60px;

  width: auto;
  height: 32px;
`;
