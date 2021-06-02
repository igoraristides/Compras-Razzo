import styled, { css } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
top: 175px;


background: #F2F5FA;
border-radius: 7px;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;  
`;
export const Price = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #55B84B;
margin-top: 5px;
`;

export const Category = styled.p`
display: flex;
flex-direction: column;
margin-top: 5px;
`;

export const Icon = styled.img`
max-width: 65px;
border-radius: 7px;
`;

export const StoreBox =  styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;
`;

export const StoreName = styled.p`
margin-top: 25px;
font-weight: 500;
font-size: 16px;
line-height: 23px;
color: #249CF2;
`;
export const ButtonAdd = styled.div`
display: flex;
flex-direction: column  ;
justify-content: space-between;
align-items: center;
padding: 8px 16px;
margin-left: 50px;
background: #249CF2;
box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
border-radius: 7px;

`;
export const BuyButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 107px;
margin-top: 15px;

background: #F2F5FA;


border: 2px solid #F2F5FA;
box-sizing: border-box;
border-radius: 7px;
color: #73657E;
`;
export const ProductName = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 18px;
color: #6D5D7A;
`;
export const Row = styled.div`
display: flex;
flex-direction: row;
margin-top : 15px;
`;

export const Prices = styled.p`

font-weight: normal;
font-size: 16px;
line-height: 150%;
color: #979797;
`;

export const Description = styled.p`

font-weight: normal;
font-size: 10px;
line-height: 150%;
text-align: center;
color: #979797
`;