import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import BlogLayout from '@/app/components/blog-about-layout';
import { blogImages } from '@/app/constants/images';
import { Container } from '../../app/styles/info-container.styles';

const BlogPage = () => {
  const t = useTranslations('BLOG');

  return (
    <Container>
      <BlogLayout
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('card_title_1')}
        firstInfoCard={{
          image: blogImages.content1,
          alt: 'rex1',
          description: t('card_description_1'),
        }}
        secondaryInfoCard={{
          image: blogImages.content2,
          alt: 'rex2',
          description: t('card_description_2'),
          descriptionSecondary: t('card_hint_2'),
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

export default BlogPage;
