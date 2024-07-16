'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logos/spa-logo.png';
import {
  Bar,
  BurgerNavList,
  Container,
  DiscountWrapper,
  Hamburger,
  LogoContainer,
  LogoText,
  LogoWrapper,
  NavigationWrapper,
  NavItem,
  NavList,
} from '@/components/navbar/styles';
import { discountText } from '@/components/navbar/utils';
import Paragraph from '@/components/paragraph';
import {
  colors,
  cormorant,
  linksWithDescription,
  tangerine,
} from '@/constants';

function Navbar() {
  const [active, setActive] = useState('Home');
  const [isBurger, setIsBurger] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setActive(pathname);
    }
  }, [pathname]);

  const handleNavigate = (link: { name: string; uri: string }) => {
    setActive(link.uri);
    setIsBurger(false);
  };

  const handleBurgerClick = () => {
    setIsBurger(!isBurger);
  };

  return (
    <Container>
      <NavigationWrapper>
        <LogoContainer>
          <LogoWrapper>
            <Image src={logo} alt='Spa Logo' />
          </LogoWrapper>
          <LogoText className={tangerine.className}>Luxe Animal Spa</LogoText>
        </LogoContainer>
        <NavList>
          {linksWithDescription.map((link) => (
            <NavItem key={link.name} active={active === link.uri}>
              <Link
                className={cormorant.className}
                href={link.uri}
                onClick={() => handleNavigate(link)}
              >
                {link.name}
              </Link>
            </NavItem>
          ))}
        </NavList>
        <Hamburger onClick={handleBurgerClick} active={isBurger}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </NavigationWrapper>
      {isBurger && (
        <BurgerNavList>
          {linksWithDescription.map((link) => (
            <NavItem key={link.name} active={active === link.uri}>
              <Link
                className={cormorant.className}
                href={link.uri}
                onClick={() => handleNavigate(link)}
              >
                {link.name}
              </Link>
            </NavItem>
          ))}
        </BurgerNavList>
      )}
      <DiscountWrapper>
        <Paragraph
          fontFamily={cormorant.className}
          size={26}
          style={{ textAlign: 'center' }}
          color={colors.charCoal}
        >
          {discountText}
        </Paragraph>
      </DiscountWrapper>
    </Container>
  );
}

export default Navbar;
