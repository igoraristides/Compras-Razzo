import styled, { css } from 'styled-components';
import Form from '../Form';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  background-color: #F7F9FC;

  z-index: 100;
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  > a:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const Logo = styled.img`
  margin: auto 0px;
  margin-right: 60px;

  width: auto;
  height: 32px;
`;

export const Img = styled.img`
  margin: auto 0px;
  width: 20px;
  height: 20px;
`;

export const Menu = styled.div`
  display: flex;

  flex-direction: column;

  width: 100vw;
  height: 100vh;

  transition: width 500ms linear;
  transition: height 250ms linear;
  transition: display 250ms linear;

  ${({ isToggled }) => {
    if (!isToggled) {
      return css`
        width: 0;
        height: 0;
        display: none;
      `;
    }
  }};

  position: fixed;

  top: 65px;

  background: #262626;

  z-index: 10000;
`;

export const MenuMobileContainer = styled.div`
  display: flex;

  align-items: center;

  height: 100%;

  position: absolute;
  right: 10px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuMobileTitle = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  text-decoration: none;

  color: #ffffff;
  font-size: 22px;
  font-weight: normal;

  transition: color 200ms linear;

  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const MenuMobileProfileContainer = styled.div`
  width: 100%;

  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  padding: 20px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Name = styled.h1`
  font-size: 21px;
  font-weight: 500;

  color: #fff;

  margin-left: 20px;
`;

export const Logout = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 14px;
  color: #0066ff;

  text-align: center;

  margin-top: 20px;
`;
