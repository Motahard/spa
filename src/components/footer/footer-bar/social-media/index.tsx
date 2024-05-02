import Image from 'next/image';
import {
  SocialList,
  SocialListItem,
  SocialMediaContainer,
  SocialMediaTitle,
} from '@/components/footer/footer-bar/social-media/styles';
import { SocialLink, cormorant } from '@/constants';

type Props = {
  socialLinks: SocialLink[];
};

function SocialMedia({ socialLinks }: Props) {
  return (
    <SocialMediaContainer>
      <SocialMediaTitle className={cormorant.className}>
        Connect With Us On Social Media
      </SocialMediaTitle>
      <SocialList>
        {socialLinks.map((social) => (
          <SocialListItem key={social.alt}>
            <a target="_blank" href={social.uri} rel="noreferrer">
              <Image src={social.icon} alt={social.alt} />
            </a>
          </SocialListItem>
        ))}
      </SocialList>
    </SocialMediaContainer>
  );
}

export default SocialMedia;
