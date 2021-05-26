import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 46px;
  width: 46px;
  background: #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);

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
      background-repeat: no-repeat;
      background-size: 20px 200px;
      background-image: url('${src}');
      transition: background-image 200ms linear;
    `;
  }}
`;