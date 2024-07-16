'use client';

import React from 'react';

import { Container } from '@/app/blog/styles';
import { contentInfo } from '@/app/blog/utils';
import content1 from '@/assets/content/content1.jpg';
import content2 from '@/assets/content/content2.jpg';
import BlogLayout from '@/components/blog-about-layout/layout';

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

export default BlogPage;
