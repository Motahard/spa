import about1 from '@/assets/content/about1.jpg';
import about2 from '@/assets/content/about2.jpg';
import BlogLayout from '@/components/blog-about-layout/layout';
import { Container } from '@/pages/blog/styles';
import { aboutInfo } from './utils';

function AboutPage() {
  return (
    <Container>
      <BlogLayout
        title="About Us"
        subtitle="Our Owners Love Dogs and Cats Only"
        firstInfoCard={{
          image: about1,
          alt: 'felix1',
          description: aboutInfo[0],
          descriptionSecondary: aboutInfo[1],
        }}
        secondaryInfoCard={{
          image: about2,
          alt: 'felix2',
          description: aboutInfo[2],
          descriptionSecondary: aboutInfo[3],
          flexDirection: 'row-reverse',
        }}
      />
    </Container>
  );
}

export default AboutPage;
