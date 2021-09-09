import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  background: #f2f5fa;
  border-radius: 7px;
`;

export const BuyButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 107px;
  margin-top: 15px;

  background: #f2f5fa;

  border: 2px solid #f2f5fa;
  box-sizing: border-box;
  border-radius: 7px;
  color: #73657e;
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 16px;
  color: #282828;
  font-weight: 500;
`;

export const Button = styled.button`
  border: 1px solid #e5e4e6;
  box-sizing: border-box;
  border-radius: 7px;
  background: #ffffff;
  width: 100%;
  height: 51px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 150ms ease;
  margin-bottom: 10px;

  svg {
    width: 24px;
    height: 24px;

    margin-right: 16px;
  }
`;
export const DeP = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    color: #55b84b;
    font-size: 12px;
  }
  h1 {
    text-transform: uppercase;
    font-size: 14px;
    color: #979797;
  }
`;
export const DeA = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    font-weight: normal;
    font-size: 11px;
    color: #979797;
  }
  svg {
    width: 24px;
    height: 24px;

    margin-right: 16px;
  }
`;
