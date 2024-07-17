import React from 'react';
import Link from 'next/link';

import FooterBar from '@/components/footer/footer-bar';
import { Container, FooterWrapper, ListItem } from '@/components/footer/styles';
import { bottomFooterBarInfo, cormorantLight } from '@/constants';

function Footer() {
  return (
    <FooterWrapper>
      <FooterBar />
      <Container>
        {bottomFooterBarInfo.map((item) => (
          <ListItem className={cormorantLight.className} key={item.id}>
            <Link href={item.href}>{item.text}</Link>
          </ListItem>
        ))}
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
