import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #f2f5fa;
  border-radius: 7px;
`;

export const ContainerProduct = styled(Container)`
  background: #ffffff;
  border: 1px solid #e5e4e6;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Price = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0px 10px 0px;

  ${({ color }) => (color ? `color: ${color};` : "color: #55B84B;")}
`;

export const Category = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`;

export const PriceBoxTotal = styled(PriceBox)`
  border-top: 1px solid #e5e4e5;
`;
export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #979797;
`;
export const Icon = styled.img`
  max-width: 90px;
  border-radius: 7px;
`;

export const IconTrash = styled(Icon)`
  max-width: 22px;
  margin-left: 15px;
  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  max-width: 12px;
  cursor: pointer;
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StoreName = styled.p`
  margin-top: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #249cf2;
`;
export const ButtonAdd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background: #249cf2;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  width: 40px;
  height: 119px;
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
export const ProductNameCart = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #6d5d7a;
`;

export const ProductName = styled(ProductNameCart)`
  padding: 10px 0px 10px 0px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  color: #979797;
`;

export const EmplyBag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  background: #f2f5fa;
  border-radius: 7px;
  min-height: 400px;
  justify-content: center;
  color: #249cf2;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin-bottom: 5px;
    }
  }
`;
