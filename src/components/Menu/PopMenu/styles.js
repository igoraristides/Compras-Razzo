import styled from "styled-components";

import { makeStyles } from "@material-ui/core";

import { theme } from "../../../styles/theme";

export default makeStyles((theme) => ({
  container: {
    width: "219px",
    padding: "0px 4px",
  },

  itemStyle: {
    borderRadius: "7px",
  },

  itemText: {
    textAlign: "left",
  },
}));

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 100%;
`;

export const Info = styled.div`
  margin: 0 30px 0 15px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.label};
`;
