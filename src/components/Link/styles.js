import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Colors } from '../../styles/defaults';


export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  text-decoration: none;
  transition: color 200ms linear;
  
  font-weight: 500;

  font-size: ${({ size }) => size || '0.875rem'};
  color: ${({ color }) => color || Colors.primary};
  margin-bottom: ${({ margin }) => margin || '10px'};
`;
