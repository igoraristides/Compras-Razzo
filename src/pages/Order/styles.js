import styled from "styled-components";

import devices from "../../styles/configs/devices";

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  flex: 1;

  flex-direction: column;
`;
export const Card = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;

  padding: 24px;
  margin-bottom: 20px;
`;

export const Modal = {
  Content: styled.div`
    margin: 20px 0 20px 0;
  `,
  Text: styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  `,
};

export const Header = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${devices.tablet} {
      align-items: stretch;
      flex-direction: row;
    }
  `,

  Img: styled.div`
    margin-right: 24px;
  `,

  Contents: styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 24px;
    > *:not(:first-child) {
      margin-top: 12px;
    }
  `,
  Section: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > *:not(:first-child) {
      margin-top: 12px;
    }
  `,
  Title: styled.div`
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.label};
    margin-top: 10px;
    text-align: center;
    @media ${devices.tablet} {
      margin-top: 0;
      text-align: start;
    }
  `,
  Subtitle: styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.subtitle};
  `,

  Situation: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Price: styled.div`
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.success};
  `,
  SituationButton: styled.div`
    display: flex;
    background: #f3defa;
    border-radius: 100px;
    height: 34px;
    justify-content: center;
    margin-top: 10px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      align-items: center;
      display: flex;
      color: #9900cc;
    }
  `,
};

export const Info = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Quantity: styled.div`
    width: 23px;
    height: 23px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 100%;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }
  `,

  ItemContent: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    @media ${devices.tablet} {
      flex-direction: row;
      margin-bottom: 0;
    }
  `,
  Title: styled.h1`
    ${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 19px;")}
    color: ${({ theme }) => theme.colors.title};
  `,
};

export const AnimalInfoContainer = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 24px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const Buttons = styled.div`
  margin-top: 20px;

  @media ${devices.tablet} {
    margin-top: 0;
  }
`;

export const PageHeader = {
  TitlePage: styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 15px;
  `,
  Buttons: styled.div`
    display: flex;
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  Content: styled.div`
    display: flex;
    margin-right: 10px;
  `,
};
