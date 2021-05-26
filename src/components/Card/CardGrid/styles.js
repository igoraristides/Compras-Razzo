import styled, { css } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;

position: absolute;
width: 290px;
height: 99px;
left: 35px;
top: 254px;

border: 1px solid #E5E4E6;
box-sizing: border-box;
border-radius: 7px;
`;

export const StoreIcon = styled.img`
width: 68px;
height: 67px;
left: 16px;
top: 16px;
border-radius: 7px;
`;

export const Content =  styled.div`
display: flex;
flex-direction: column;
border-left: 16px;  
`;

export const StoreBox =  styled.div`
display: flex;
flex-direction: column;
`;

export const StoreName =  styled.p`
font-size: 13px;
line-height: 18px;
`;
export const StoreDescription =  styled.p`
font-weight: 500;
font-size: 12px;
line-height: 17px;
color: #249CF2;
`;
export const StoreAdress =  styled.p`
font-size: 12px;
line-height: 14px;  
color: #979797;
`;