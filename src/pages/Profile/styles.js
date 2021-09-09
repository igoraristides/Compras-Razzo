import styled from "styled-components";

import devices from "../../styles/configs/devices";

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const PhotoContent = styled.div`
  display: flex;

  justify-content: center;
  @media ${devices.laptop} {
    margin-right: 20px;
    justify-content: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const DirButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 15px;
  background: #fff;
`;
export const Buttons = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
  justify-content: center;
  @media ${devices.laptop} {
    margin-right: 10px;
    justify-content: flex-end;
  }
`;
