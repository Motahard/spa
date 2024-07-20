import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import { Breaker } from '@/components/breaker';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { colors, cormorant, cormorantLight } from '@/constants';
import { SpaContainer } from '@/styles/spa.styles';

function SpaServices() {
  const t = useTranslations('SPA');

  return (
    <SpaContainer>
      <Title
        size={70}
        weight={700}
        fontFamily={cormorant.className}
        top={48}
        color={colors.charCoal}
      >
        {t('title')}
      </Title>
      <Breaker />
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
      >
        {t('title_1')}
      </Title>
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
        bottom={32}
      >
        $549
      </Title>
      <Paragraph
        size={30}
        weight={400}
        fontFamily={cormorantLight.className}
        color={colors.charCoal}
        style={{ textAlign: 'center' }}
      >
        {t('paragraph_1')}
      </Paragraph>
      <Title
        size={35}
        top={48}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
      >
        {t('title_2')}
      </Title>
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
        bottom={32}
      >
        $149
      </Title>
      <Paragraph
        size={30}
        weight={400}
        fontFamily={cormorantLight.className}
        color={colors.charCoal}
        style={{ textAlign: 'center' }}
      >
        {t('paragraph_2')}
      </Paragraph>
      <Title
        size={35}
        top={48}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
      >
        {t('title_3')}
      </Title>
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
        bottom={32}
      >
        $269
      </Title>
      <Paragraph
        size={30}
        weight={400}
        fontFamily={cormorantLight.className}
        color={colors.charCoal}
        style={{ textAlign: 'center' }}
      >
        {t('paragraph_3')}
      </Paragraph>
      <Title
        size={35}
        top={48}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
      >
        {t('title_4')}
      </Title>
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
        bottom={32}
      >
        $219
      </Title>
      <Paragraph
        size={30}
        weight={400}
        fontFamily={cormorantLight.className}
        color={colors.charCoal}
        style={{ textAlign: 'center' }}
      >
        {t('paragraph_4')}
      </Paragraph>
      <Title
        size={35}
        top={48}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
      >
        {t('title_5')}
      </Title>
      <Title
        size={35}
        weight={400}
        fontFamily={cormorant.className}
        color={colors.charCoal}
        bottom={32}
      >
        $999
      </Title>
      <Paragraph
        size={30}
        weight={400}
        fontFamily={cormorantLight.className}
        color={colors.charCoal}
        style={{ textAlign: 'center' }}
      >
        {t('paragraph_5')}
      </Paragraph>
      <Breaker />
    </SpaContainer>
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

export default SpaServices;
