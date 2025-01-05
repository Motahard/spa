import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  SocialList,
  SocialListItem,
  SocialMediaContainer,
  SocialMediaTitle,
} from '@/app/components/footer/footer-bar/social-media/styles';
import { cormorant, SocialLink } from '@/app/constants';

type Props = {
  socialLinks: SocialLink[];
};

const SocialMedia = ({ socialLinks }: Props) => {
  const t = useTranslations('FOOTER.SOCIAL');

  return (
    <SocialMediaContainer>
      <SocialMediaTitle className={cormorant.className}>
        {t('title')}
      </SocialMediaTitle>
      <SocialList>
        {socialLinks.map(({ alt, uri, icon }) => (
          <SocialListItem key={alt}>
            <a target='_blank' href={uri} rel='noreferrer'>
              <Image src={icon} alt={alt} />
            </a>
          </SocialListItem>
        ))}
      </SocialList>
    </SocialMediaContainer>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default SocialMedia;
