import React from 'react';

import PropTypes from 'prop-types';

import { Container, Link as RouterLink } from './styles';

const Link = ({ to, label, active }) => {
  return (
    <Container active={active}>
      <RouterLink to={to}>{label}</RouterLink>
    </Container>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Link;
