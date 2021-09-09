import styled, { css } from "styled-components";

import ripple from "../../../styles/animations/ripple";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const NoImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled(NoImageBackground)`
  ${ripple}

  cursor: pointer;
  width: 100%;
  justify-content: center;
  border-radius: 15px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
      background-size: cover !important;
    `}
  background-color: #fff;

  > div {
    transition: 0.1s transform;
  }
  ${({ circle }) =>
    circle &&
    css`
      border-radius: 100px;
    `}

  border: 1px ${({ theme }) => theme.colors.border} solid;
  position: relative;

  p {
    color: #636366;
    font-weight: normal;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const LoadedImage = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  &.profile-photo {
    width: 100%;
    height: auto;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
  }

  &.capa-photo {
    width: 100%;
    height: auto;
    max-width: 400px;
    max-height: 200px;
    border-radius: 20px;
  }
  border-radius: 20px;
`;

export const RemoveButton = styled.div`
  border: 1px ${({ theme }) => theme.colors.border} solid;
  background: white;
  width: 24px;
  cursor: pointer;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  ${({ right }) => (right ? `right: -${right}px;` : "right: -5px;")}

  z-index: 50;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;
