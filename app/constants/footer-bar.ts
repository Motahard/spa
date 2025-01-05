export type FooterItem = {
  id: number;
  text: string;
  href: string;
};

export const leftFooterBarInfo = [
  { text: 'Blog', id: 1, href: '/blog' },
  { text: 'Cancellations', id: 2, href: '/book-appointment' },
  { text: 'Track Your Animal', id: 3, href: '/info' },
  { text: 'Luxe’s Annual Spa Day 2021', id: 4, href: '/spa-services' },
  { text: 'Payment Options', id: 5, href: '/book-appointment' },
];

export const rightFooterBarInfo = [
  { text: 'Home', id: 1, href: '/home' },
  { text: 'About Us', id: 2, href: '/about' },
  { text: 'Contact Us', id: 3, href: '/contact' },
  { text: 'FAQs', id: 4, href: '/info' },
  { text: 'Help with navigation', id: 5, href: '#' },
];

export const bottomFooterBarInfo = [
  { text: 'Cookie Policy', id: 1, href: '#' },
  { text: 'Cookies Settings', id: 2, href: '#' },
  {
    text: 'Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.',
    id: 3,
    href: '#',
  },
  { text: 'Terms', id: 4, href: '#' },
  { text: 'Privacy', id: 5, href: '#' },
  { text: 'Security', id: 6, href: '#' },
];
