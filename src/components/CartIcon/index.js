import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

import cart from '../../assets/compras.svg';

const Cart = ({ src }) => {
  return <Container  src={src || cart}/>;
};

Cart.defaultProps = {
  size: 36,
};

Cart.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
};

export default Cart;
