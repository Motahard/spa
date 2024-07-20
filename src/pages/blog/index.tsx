import React from 'react';
import { GetStaticProps } from 'next';

import content1 from '@/assets/content/content1.jpg';
import content2 from '@/assets/content/content2.jpg';
import BlogLayout from '@/components/blog-about-layout/layout';
import { Container } from '@/pages/blog/styles';
import { useTranslations } from 'next-intl';

function BlogPage() {
  const t = useTranslations('BLOG')
  return (
    <Container>
      <BlogLayout
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('card_title_1')}
        firstInfoCard={{
          image: content1,
          alt: 'rex1',
          description: t('card_description_1'),
        }}
        secondaryInfoCard={{
          image: content2,
          alt: 'rex2',
          description: t('card_description_2'),
          descriptionSecondary: t('card_hint_2'),
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

export default BlogPage;
