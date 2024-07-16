import { StaticImageData } from 'next/image';

import facebook from '@/assets/social/facebook.png';
import instagram from '@/assets/social/instagram.png';
import pinterest from '@/assets/social/pinterest.png';
import snapchat from '@/assets/social/snapchat.png';
import twitter from '@/assets/social/twitter.png';

export type SocialLink = {
  icon: StaticImageData;
  alt: string;
  uri: string;
};

export const socialLinks = [
  { icon: instagram, alt: 'Instagram', uri: 'https://www.instagram.com/' },
  { icon: facebook, alt: 'Facebook', uri: 'https://www.facebook.com/' },
  { icon: pinterest, alt: 'Pinterest', uri: 'https://www.pinterest.com/' },
  { icon: twitter, alt: 'Twitter', uri: 'https://twitter.com/' },
  { icon: snapchat, alt: 'Snapchat', uri: 'https://www.snapchat.com/' },
];
