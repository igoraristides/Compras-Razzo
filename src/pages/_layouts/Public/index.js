import React from 'react';
import './styles'
import Menu from '../../../components/Menu'
import { Container, Content } from './styles';
import PropTypes from 'prop-types';
import Cart from '../../../components/Card/CardCart'
import { Grid } from '@material-ui/core';
//<Grid item xs = {12} md = {4}>
   //         {children}
    //          </Grid>

const Public = ({children}) =>  {
    return (
        <Container>
          <Menu />
          <Content>
            <Grid container spacing = {2}>
            <Grid item xs = {12} md = {8}>
            {children}
              </Grid>
            <Grid item xs = {12} md = {4}>
              <Cart cart/>
              </Grid>
            </Grid>
          </Content>
        </Container>
      );
    };

Public.propTypes = {
    children: PropTypes.element.isRequired,
};
      
export default Public;