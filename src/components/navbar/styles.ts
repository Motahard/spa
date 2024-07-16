import styled from 'styled-components';

import { colors } from '@/constants';

type NavItemProps = {
  active: boolean;
};

export const Container = styled.div``;

export const DiscountWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.inHouse};
  padding: 8px 0;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90px;

  @media (max-width: 1438px) {
    justify-content: flex-end;
    padding: 0 32px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 8px;
  top: 8px;
`;

export const LogoWrapper = styled.div`
  > img {
    width: 100%;
  }
`;

export const LogoText = styled.p`
  font-size: 26px;
  line-height: 0;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const Hamburger = styled.div<{ active: boolean }>`
  display: none;

  @media (max-width: 1438px) {
    display: block;
    cursor: pointer;
    ${(props) =>
      props.active &&
      `
      & > span:nth-child(2) {
        opacity: 0;
      }

      & > span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      & > span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}
  }
`;

export const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;

export const BurgerNavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const NavItem = styled.li<NavItemProps>`
  > a {
    font-size: 26px;
    text-decoration: none;
    color: ${colors.charCoal};
    ${(props) =>
      props.active && `border-bottom: 6px solid ${colors.pinkKisses}`}
  }
`;
