import { StaticImageData } from 'next/image';
import {
  ContentWrapper,
  TitleWrapper,
} from '@/components/blog-about-layout/styles';
import InfoCard from '@/components/info-card';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { colors, cormorant, tangerine } from '@/constants';

type InfoCardProps = {
  image: string | StaticImageData;
  alt: string;
  description: string;
  descriptionSecondary?: string;
  flexDirection?: string;
};

type Props = {
  title: string;
  subtitle: string;
  description?: string;
  firstInfoCard: InfoCardProps;
  secondaryInfoCard: InfoCardProps;
};

function BlogLayout({
  title,
  subtitle,
  description,
  firstInfoCard,
  secondaryInfoCard,
}: Props) {
  return (
    <>
      <TitleWrapper>
        <Title
          size={70}
          weight={700}
          fontFamily={cormorant.className}
          top={48}
          bottom={24}
          color={colors.charCoal}
        >
          {title}
        </Title>
        <Paragraph size={40} weight={400} fontFamily={tangerine.className}>
          {subtitle}
        </Paragraph>
      </TitleWrapper>
      {description && (
        <Paragraph size={36} weight={400} fontFamily={cormorant.className}>
          {description}
        </Paragraph>
      )}
      <ContentWrapper>
        <InfoCard {...firstInfoCard} />
        <InfoCard {...secondaryInfoCard} />
      </ContentWrapper>
    </>
  );
}

export default BlogLayout;
