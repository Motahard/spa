import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import FooterBar from '@/components/footer/footer-bar';
import { Container, FooterWrapper, ListItem } from '@/components/footer/styles';
import { getFooterBar } from '@/components/footer/utils';
import { bottomFooterBarInfo, cormorantLight } from '@/constants';

function Footer() {
  const t = useTranslations('FOOTER.BOTTOM');
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
        {bottomFooterBar.map((item) => (
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default Footer;
