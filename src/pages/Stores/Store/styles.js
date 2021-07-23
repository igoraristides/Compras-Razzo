import styled from "styled-components";
import Form from "../../../components/Form";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled(Form)`
  display: flex;
  margin-top: 30px;
  width: auto;
  height: 32px;
  justify-content: right;
`;
export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;
export const Section = styled.div`
  margin-top: 40px;
`;
