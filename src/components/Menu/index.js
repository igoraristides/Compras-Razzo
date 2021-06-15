import React, { useState, useRef } from "react";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/logo-1.svg";

import Avatar from "../Avatar";
import Link from "./Link";
import Cart from "../Cart";

import { Container, Navigation, Logo } from "./styles";

const links = [
  {
    to: "/",
    label: "Dashboard",
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
            <Link key={to} to={to} label={label} className="link" active />
          ))}
        </Navigation>
        <Cart />
        <Avatar size={46} />
      </Container>
    </>
  );
};

export default Menu;
