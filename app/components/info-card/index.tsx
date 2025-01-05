import Image, { StaticImageData } from 'next/image';

import {
  ContentItem,
  ImageWrapper,
  TextWrapper,
} from '@/app/components/info-card/styles';
import Paragraph from '@/app/components/paragraph';
import { cormorantLight } from '@/app/constants';

type Props = {
  image: string | StaticImageData;
  alt: string;
  description: string;
  descriptionSecondary?: string;
  flexDirection?: string;
};

const InfoCard = (props: Props) => {
  const { image, alt, description, descriptionSecondary, flexDirection } =
    props;

  return (
    <ContentItem flexDirection={flexDirection}>
      <ImageWrapper>
        <Image src={image} alt={alt} />
      </ImageWrapper>
      <TextWrapper>
        <Paragraph size={30} weight={500} fontFamily={cormorantLight.className}>
          {description}
        </Paragraph>
        {descriptionSecondary && (
          <Paragraph
            size={30}
            weight={500}
            fontFamily={cormorantLight.className}
          >
            {descriptionSecondary}
          </Paragraph>
        )}
      </TextWrapper>
    </ContentItem>
  );
};

export default InfoCard;
