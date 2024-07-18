import React from 'react';
import { GetStaticProps } from 'next';

import content1 from '@/assets/content/content1.jpg';
import content2 from '@/assets/content/content2.jpg';
import BlogLayout from '@/components/blog-about-layout/layout';
import { Container } from '@/pages/blog/styles';
import { contentInfo } from '@/pages/blog/utils';

function BlogPage() {
  return (
    <Container>
      <BlogLayout
        title='The Bark Chronicles'
        subtitle='Where To Read All About The Bark!'
        description='Rex, The Dog Who Never Stops Playing ... Ever'
        firstInfoCard={{
          image: content1,
          alt: 'rex1',
          description: contentInfo[0],
        }}
        secondaryInfoCard={{
          image: content2,
          alt: 'rex2',
          description: contentInfo[1],
          descriptionSecondary: contentInfo[2],
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
