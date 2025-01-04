import { StaticImageData } from 'next/image';

import { socialLogos } from './images';

export type SocialLink = {
  icon: StaticImageData;
  alt: string;
  uri: string;
};

export const socialLinks = [
  {
    icon: socialLogos.instagram,
    alt: 'Instagram',
    uri: 'https://www.instagram.com/',
  },
  {
    icon: socialLogos.facebook,
    alt: 'Facebook',
    uri: 'https://www.facebook.com/',
  },
  {
    icon: socialLogos.pinterest,
    alt: 'Pinterest',
    uri: 'https://www.pinterest.com/',
  },
  { icon: socialLogos.twitter, alt: 'Twitter', uri: 'https://twitter.com/' },
  {
    icon: socialLogos.snapchat,
    alt: 'Snapchat',
    uri: 'https://www.snapchat.com/',
  },
];
