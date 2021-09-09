import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxForm = styled.div`
  width: 100%;
  border: 3px solid #e5e4e6;
  box-sizing: border-box;
  border-radius: 7px;
  z-index: 3;
  padding: 16px 12px;
`;

export const Inputs = styled.div`
  margin-top: 16px;

  .margin-20 {
    margin-top: 20px;
  }
`;

export const ControllSave = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  p {
    color: #73657e;
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
  }
`;
export const TitlePage = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  div {
    padding-right: 5px;
    padding-left: 5px;
  }
`;
