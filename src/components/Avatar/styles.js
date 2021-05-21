import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  border-radius: 50%;

  ${({ src }) => {
    if (src === 'no-image')
      return css`
        background: #ffffff;
      `;

    return css`
      background-blend-mode: normal;
      border: 2px solid #ffffff;
      box-sizing: border-box;
      
      background-position: center;
      background-size: cover;
      background-image: url('${src}');
      transition: background-image 200ms linear;
    `;
  }}
`;