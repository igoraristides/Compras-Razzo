import React, { useState, useRef } from 'react';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/logo-1.svg';
import compra from '../../assets/compras.svg';

import Input from '../Input';

import Avatar from '../Avatar';
import Link from './Link';

import {
  Container,
  Navigation,
  Logo,
  MenuMobileContainer,
  Img,
  SearchContainer,
  } from './styles';


const links = [
    {
      to: '/',
      label: 'Dashboard',
    },
];

const Menu = () => {
  const { pathname } = useLocation();
  const formRef = useRef(null);
    return (
      <>
      <Container>
        <Navigation>
          <Logo src={logo} />
          {links.map(({ to, label }) => (
          <Link
              key={to}
              to={to}
              label={label}
              className="link"
              active/>
          ))}

        </Navigation>
        <Img src={compra} style={{ marginRight: '8px' }} />
      <Avatar/>
      </Container>
    </>
  );
};

export default Menu;