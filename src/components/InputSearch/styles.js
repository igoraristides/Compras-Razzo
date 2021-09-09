import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #e5e4e6;
  box-sizing: border-box;
  border-radius: 7px;
  background: #ffffff;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ maxWidth }) => {
    if (maxWidth) {
      return css`
        max-width: ${maxWidth}px;
      `;
    }
  }}

  ${({ marginAuto }) => {
    if (marginAuto) {
      return css`
        margin: auto;
      `;
    }
  }}

${({ margin }) => {
    if (margin) {
      return css`
        margin-bottom: ${margin}px;
      `;
    }
  }}

${({ height }) => {
    if (height) {
      return css`
        height: ${height}px;
      `;
    }
  }}

${({ backgroundColor }) => {
    if (backgroundColor) {
      return css`
        background-color: ${backgroundColor};
      `;
    }
  }}




  form {
    display: flex;
    width: 100%;
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  border: none;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  color: #888;

  ${({ maxWidth }) => {
    if (maxWidth) {
      return css`
        max-width: ${maxWidth}px;
      `;
    }
  }}

  &::placeholde {
    color: #d0c9d6;
  }
`;

export const ButtonSearch = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;

  svg {
    color: #d0c9d6;
  }
`;
