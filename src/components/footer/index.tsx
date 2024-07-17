import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FooterBar from '@/components/footer/footer-bar';
import { Container, FooterWrapper, ListItem } from '@/components/footer/styles';
import { bottomFooterBarInfo, cormorantLight } from '@/constants';

function Footer() {
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <FooterWrapper>
      <FooterBar />
      <Container>
        {bottomFooterBarInfo.map((item) => (
          <ListItem className={cormorantLight.className} key={item.id}>
            <Link href={item.href}>{item.text}</Link>
          </ListItem>
        ))}
        <ListItem>
          <Link href={route} locale={otherLocale}>
            {otherLocale?.toUpperCase()}
          </Link>
        </ListItem>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
