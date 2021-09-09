import styled, { css } from "styled-components";

import fadeIn from "../../styles/animations/fadeIn";

export const Container = styled.div`
  ${fadeIn};

  width: 100%;
`;

export const Field = styled.input`
  -webkit-appearance: none;

  font-size: 16px;

  padding: 0px 10px;
  height: 45px;
  border-radius: 100px;
  transition: border-color 200ms linear;
  border: 1px solid ${({ theme }) => theme.colors.border};
  :hover,
  :focus {
    border-color: #aeaeb2;
  }

  &::placeholder {
    font-size: 13px;
    color: #cedbf7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  width: 100%;

  max-width: ${({ width }) => width || `100%`};

  ${({ error }) =>
    error &&
    css`
      border-color: #ff3b2f;

      &:hover {
        border-color: #f83019;
      }
    `};
`;

export const FieldContainer = styled.div`
  position: relative;

  .eyeBtn {
    display: flex;
    align-items: center;
    place-content: center;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translate(-50%);
    right: 1rem;

    svg {
      width: 24px;
      height: auto;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.border};
    }

    :hover {
      svg {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;

  ${({ color }) => {
    if (color === "black")
      return css`
        color: "#000000";
      `;

    return css`
      color: ${({ theme }) => theme.colors.secondary};
    `;
  }}
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
