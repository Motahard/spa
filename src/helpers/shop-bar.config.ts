import { StaticImageData } from 'next/image';

import { shopImages } from '@/constants/images';

type Card = {
  id: number;
  image: StaticImageData;
  description: string;
  price: string;
  subDescription: string;
}[];

export const dogCollars = (items: Array<[string, string, string]>): Card => [
  {
    id: 1,
    image: shopImages.shop1,
    description: items[0][0],
    subDescription: items[0][1],
    price: items[0][2],
  },
  {
    id: 2,
    image: shopImages.shop2,
    description: items[1][0],
    subDescription: items[1][1],
    price: items[1][2],
  },
  {
    id: 3,
    image: shopImages.shop3,
    description: items[2][0],
    subDescription: items[2][1],
    price: items[2][2],
  },
];

export const animalCarryOns = (
  items: Array<[string, string, string]>
): Card => [
  {
    id: 4,
    image: shopImages.shop4,
    description: items[0][0],
    subDescription: items[0][1],
    price: items[0][2],
  },
  {
    id: 5,
    image: shopImages.shop5,
    description: items[1][0],
    subDescription: items[1][1],
    price: items[1][2],
  },
  {
    id: 6,
    image: shopImages.shop6,
    description: items[2][0],
    subDescription: items[2][1],
    price: items[2][2],
  },
];
