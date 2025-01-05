import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import BlogLayout from '@/app/components/blog-about-layout';
import { aboutImages } from '@/app/constants/images';
import { Container } from '../../app/styles/info-container.styles';

const AboutPage = () => {
  const t = useTranslations('ABOUT');

  return (
    <Container>
      <BlogLayout
        title={t('title')}
        subtitle={t('subtitle')}
        firstInfoCard={{
          image: aboutImages.about1,
          alt: 'felix1',
          description: t('description_1'),
          descriptionSecondary: t('description_secondary_1'),
        }}
        secondaryInfoCard={{
          image: aboutImages.about2,
          alt: 'felix2',
          description: t('description_2'),
          descriptionSecondary: t('description_secondary_2'),
          flexDirection: 'row-reverse',
        }}
      />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default AboutPage;
