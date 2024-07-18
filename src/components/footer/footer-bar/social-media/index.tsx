import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  SocialList,
  SocialListItem,
  SocialMediaContainer,
  SocialMediaTitle,
} from '@/components/footer/footer-bar/social-media/styles';
import { cormorant, SocialLink } from '@/constants';

type Props = {
  socialLinks: SocialLink[];
};

function SocialMedia({ socialLinks }: Props) {
  const t = useTranslations('FOOTER.SOCIAL');

  return (
    <SocialMediaContainer>
      <SocialMediaTitle className={cormorant.className}>
        {t('title')}
      </SocialMediaTitle>
      <SocialList>
        {socialLinks.map((social) => (
          <SocialListItem key={social.alt}>
            <a target='_blank' href={social.uri} rel='noreferrer'>
              <Image src={social.icon} alt={social.alt} />
            </a>
          </SocialListItem>
        ))}
      </SocialList>
    </SocialMediaContainer>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default SocialMedia;
