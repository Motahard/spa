import React from 'react';
import { GetStaticProps } from 'next';

import { aboutInfo } from './utils';

import about1 from '@/assets/content/about1.jpg';
import about2 from '@/assets/content/about2.jpg';
import BlogLayout from '@/components/blog-about-layout/layout';
import { Container } from '@/pages/about/styles';
import { useTranslations } from 'next-intl';

function AboutPage() {
  const t = useTranslations('ABOUT');
  return (
    <Container>
      <BlogLayout
        title={t('title')}
        subtitle={t('subtitle')}
        firstInfoCard={{
          image: about1,
          alt: 'felix1',
          description: t('description_1'),
          descriptionSecondary: t('description_secondary_1'),
        }}
        secondaryInfoCard={{
          image: about2,
          alt: 'felix2',
          description: t('description_2'),
          descriptionSecondary: t('description_secondary_2'),
          flexDirection: 'row-reverse',
        }}
      />
    </Container>
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

export default AboutPage;
