import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import FooterBar from '@/app/components/footer/footer-bar';
import {
  Container,
  FooterWrapper,
  ListItem,
} from '@/app/components/footer/styles';
import { getFooterBar } from '@/app/components/footer/utils';
import { bottomFooterBarInfo, cormorantLight } from '@/app/constants';

const Footer = () => {
  const t = useTranslations('FOOTER.POLICY');
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  const bottomFooterBar = getFooterBar(
    [
      t('cookie'),
      t('cookie_settings'),
      t('copyright'),
      t('terms'),
      t('privacy'),
      t('security'),
    ],
    bottomFooterBarInfo
  );

  return (
    <FooterWrapper>
      <FooterBar />
      <Container>
        {bottomFooterBar.map(({ id, href, text }) => (
          <ListItem className={cormorantLight.className} key={id}>
            <Link href={href}>{text}</Link>
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
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default Footer;
