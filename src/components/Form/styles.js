import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ margin }) =>
    css`
      margin: ${margin};
    `}

  ${({ width }) => {
    return css`
      width: ${width}px;
      max-width: ${width}px;

      @media (max-width: ${width + 20}px) {
        width: auto !important;
      }
    `;
  }};
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  margin-bottom: 20px;
`;
