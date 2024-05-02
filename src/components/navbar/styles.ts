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
