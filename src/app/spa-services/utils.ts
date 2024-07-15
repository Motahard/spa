import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { colors, cormorant, cormorantLight } from '@/constants';
import { Breaker } from '@/components/breaker';
import { CSSProperties } from 'react';

export const spaServicesInfo = [
  {
    Component: Title,
    description: 'Spa Services',
    props: {
      size: 70,
      weight: 700,
      fontFamily: cormorant.className,
      top: 48,
      color: colors.charCoal,
    },
  },
  {
    Component: Breaker,
  },
  {
    Component: Title,
    description: 'Dog or Cat Full Spa Treatment',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      color: colors.charCoal,
    },
  },
  {
    Component: Title,
    description: '$549',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      bottom: 32,
      color: colors.charCoal,
    },
  },
  {
    Component: Paragraph,
    description:
      'Bath, massage, full grooming of hair and nails (comes with a take home bath kit and animal treats).',
    props: {
      size: 30,
      weight: 400,
      fontFamily: cormorantLight.className,
      color: colors.charCoal,
      style: { textAlign: 'center' } as CSSProperties,
    },
  },
  {
    Component: Title,
    description: 'Dog or Cat Body Massage ',
    props: {
      size: 35,
      weight: 400,
      top: 48,
      fontFamily: cormorant.className,
      color: colors.charCoal,
    },
  },
  {
    Component: Title,
    description: '$149',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      bottom: 32,
      color: colors.charCoal,
    },
  },
  {
    Component: Paragraph,
    description:
      'Massaging of the paws, thighs, head and of course, behind the ears (comes with animal treats).',
    props: {
      size: 30,
      weight: 400,
      fontFamily: cormorantLight.className,
      color: colors.charCoal,
      style: { textAlign: 'center' } as CSSProperties,
    },
  },
  {
    Component: Title,
    description: 'Doggy Facial and Fur Cleanse Treatment ',
    props: {
      size: 35,
      weight: 400,
      top: 48,
      fontFamily: cormorant.className,
      color: colors.charCoal,
    },
  },
  {
    Component: Title,
    description: '$269',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      bottom: 32,
      color: colors.charCoal,
    },
  },
  {
    Component: Paragraph,
    description:
      'Dogs receive a facial with our vegan, cruelty free face products and cleansing of any dirt left hiding in their beautiful fur (comes with a take home face products and animal treats).',
    props: {
      size: 30,
      weight: 400,
      fontFamily: cormorantLight.className,
      color: colors.charCoal,
      style: { textAlign: 'center' } as CSSProperties,
    },
  },
  {
    Component: Title,
    description: 'Cat Facial and Fur Cleanse Treatment ',
    props: {
      size: 35,
      weight: 400,
      top: 48,
      fontFamily: cormorant.className,
      color: colors.charCoal,
    },
  },
  {
    Component: Title,
    description: '$219',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      bottom: 32,
      color: colors.charCoal,
    },
  },
  {
    Component: Paragraph,
    description:
      'Cat receives a facial with our vegan, cruelty free face products and cleansing of any dirt left hidding in their fur (comes with a take home face products and animal treats).',
    props: {
      size: 30,
      weight: 400,
      fontFamily: cormorantLight.className,
      color: colors.charCoal,
      style: { textAlign: 'center' } as CSSProperties,
    },
  },
  {
    Component: Title,
    description: 'Cat and Dog Swim Spa Retreat ',
    props: {
      size: 35,
      weight: 400,
      top: 48,
      fontFamily: cormorant.className,
      color: colors.charCoal,
    },
  },
  {
    Component: Title,
    description: '$999',
    props: {
      size: 35,
      weight: 400,
      fontFamily: cormorant.className,
      bottom: 32,
      color: colors.charCoal,
    },
  },
  {
    Component: Paragraph,
    description:
      'Take your animal on an amazing journey retreat in the woods with a scratch proof tent, feline repellant protector and sticks galore (for dogs, of course). There is a sauna that is for the animal owners and a smaller bath for your pets (comes with a cute animal raincoat and boots).',
    props: {
      size: 30,
      weight: 400,
      fontFamily: cormorantLight.className,
      color: colors.charCoal,
      style: { textAlign: 'center' } as CSSProperties,
    },
  },
  {
    Component: Breaker,
  },
];
