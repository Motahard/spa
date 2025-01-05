import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import { getFooterBar } from '../utils';

import ContactEmail from '@/app/components/footer/footer-bar/contact-email';
import PanelList from '@/app/components/footer/footer-bar/panel-list';
import SocialMedia from '@/app/components/footer/footer-bar/social-media';
import {
  ContactWrapper,
  FooterBarWrapper,
} from '@/app/components/footer/footer-bar/styles';
import {
  leftFooterBarInfo,
  rightFooterBarInfo,
  socialLinks,
} from '@/app/constants';

const FooterBar = () => {
  const tL = useTranslations('FOOTER.LINKS');
  const tI = useTranslations('FOOTER.INFO');

  const leftFooterBar = getFooterBar(
    [tL('blog'), tL('cancelattions'), tL('track'), tL('luxe'), tL('payment')],
    leftFooterBarInfo
  );

  const rightFooterBar = getFooterBar(
    [tI('home'), tI('about'), tI('contact'), tI('faq'), tI('help')],
    rightFooterBarInfo
  );

  return (
    <FooterBarWrapper>
      <PanelList title={tL('title')} items={leftFooterBar} />
      <ContactWrapper>
        <ContactEmail />
        <SocialMedia socialLinks={socialLinks} />
      </ContactWrapper>
      <PanelList title={tI('title')} items={rightFooterBar} />
    </FooterBarWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default FooterBar;
