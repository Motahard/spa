import { StaticImageData } from 'next/image';

import facebook from '@/assets/social/facebook.webp';
import instagram from '@/assets/social/instagram.webp';
import pinterest from '@/assets/social/pinterest.webp';
import snapchat from '@/assets/social/snapchat.webp';
import twitter from '@/assets/social/twitter.webp';

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
