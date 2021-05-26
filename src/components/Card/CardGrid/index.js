import React, { useState } from 'react';

import {
  Container,
  Content,
  StoreIcon,
  StoreBox,
  StoreName,
  StoreAdress,
  StoreDescription,
} from './styles';

const CardGrid = ({data}) => {
    console.log(data);
    return (
    <Container>
        <StoreIcon src = {data.assets.logo}/>
        <Content>
            <StoreBox>
                <StoreName>
                    {data.name}
                </StoreName>
                <StoreDescription>
                    {data.description}
                </StoreDescription>
            </StoreBox>
            <StoreAdress/>
        </Content>

    </Container>
    
    );
};

export default CardGrid;

