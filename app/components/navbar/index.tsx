import React from 'react';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
} from '@/app/components/navbar/styles';
import { getNavbarItems } from '@/app/components/navbar/utils';
import Paragraph from '@/app/components/paragraph';
import { colors, cormorant, tangerine } from '@/app/constants';
import { commonImages } from '@/app/constants/images';

const Navbar = () => {
  const t = useTranslations('NAVBAR');
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

  const titleNavItems = [
    t('home'),
    t('info'),
    t('spa'),
    t('book'),
    t('blog'),
    t('about'),
    t('contact'),
  ];

  const navbarItems = getNavbarItems(titleNavItems);

  return (
    <Container>
      <NavigationWrapper>
        <LogoContainer>
          <LogoWrapper>
            <Image src={commonImages.logo} alt='Spa Logo' />
          </LogoWrapper>
          <LogoText className={tangerine.className}>{t('title')}</LogoText>
        </LogoContainer>
        <NavList>
          {navbarItems.map((link) => (
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
          {navbarItems.map((link) => (
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
          {t('discount')}
        </Paragraph>
      </DiscountWrapper>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default Navbar;
