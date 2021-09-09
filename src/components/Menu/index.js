import React, { useState, useRef } from "react";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/logo-1.svg";

import Avatar from "../Avatar";
import Link from "./Link";

import { Container, Navigation, Logo, Row } from "./styles";
import PopMenu from "./PopMenu";

const links = [
  {
    to: "/",
    label: "Dashboard",
  },
];

const Menu = () => {
  return (
    <>
      <Container>
        <Navigation>
          <Row>
            <Logo src={logo} />
            {links.map(({ to, label }) => (
              <Link key={to} to={to} label={label} className="link" active />
            ))}
          </Row>
          <Row>
            <PopMenu />
          </Row>
        </Navigation>
      </Container>
    </>
  );
};

export default Menu;
