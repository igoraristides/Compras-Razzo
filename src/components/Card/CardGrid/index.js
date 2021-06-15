import React, { useState } from 'react';

import {
  Container,
  Content,
  StoreIcon,
  StoreBox,
  StoreName,
  StoreAddress,
  StoreDescription,
} from './styles';

const CardGrid = ({data}) => {
    console.log(data);
    return (
    <Container>
        <StoreIcon src = {data.assets?.logo}/>
        <Content>
            <StoreBox>
                <StoreName>
                    {data.name}
                </StoreName>
                <StoreDescription>
                    {data.description}
                </StoreDescription>
            </StoreBox>
            <StoreAddress>
               Rua {data.address?.street_name}, { data.address?.street_number}
            </StoreAddress>
            <StoreAddress>
            {data.address?.neighborhood}
            </StoreAddress>
        </Content>

    </Container>
    
    );
};

export default CardGrid;

