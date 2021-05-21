import React from 'react';
import './styles'
import Menu from '../../../components/Menu'
import { Container, Content } from './styles';
import PropTypes from 'prop-types';

const Public = ({children}) =>  {
    return (
        <Container>
          <Menu />
          <Content>{children}</Content>
        </Container>
      );
    };

Public.propTypes = {
    children: PropTypes.element.isRequired,
};
      
export default Public;