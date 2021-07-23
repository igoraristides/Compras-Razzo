import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;

  border: 1px solid #e5e4e6;
  box-sizing: border-box;
  border-radius: 7px;
`;

export const StoreIcon = styled.img`
  width: 68px;
  height: 67px;
  border-radius: 7px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreName = styled.p`
  font-size: 13px;
  line-height: 18px;
  color: #6d5d7a;
`;
export const StoreDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #249cf2;
`;
export const StoreAddress = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #979797;
`;
