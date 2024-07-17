import { StaticImageData } from 'next/image';

import shop1 from '@/assets/shop/shop1.png';
import shop2 from '@/assets/shop/shop2.png';
import shop3 from '@/assets/shop/shop3.png';
import shop4 from '@/assets/shop/shop4.png';
import shop5 from '@/assets/shop/shop5.png';
import shop6 from '@/assets/shop/shop6.png';

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
    image: shop1,
    description: items[0][0],
    subDescription: items[0][1],
    price: items[0][2],
  },
  {
    id: 2,
    image: shop2,
    description: items[1][0],
    subDescription: items[1][1],
    price: items[1][2],
  },
  {
    id: 3,
    image: shop3,
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
    image: shop4,
    description: items[0][0],
    subDescription: items[0][1],
    price: items[0][2],
  },
  {
    id: 5,
    image: shop5,
    description: items[1][0],
    subDescription: items[1][1],
    price: items[1][2],
  },
  {
    id: 6,
    image: shop6,
    description: items[2][0],
    subDescription: items[2][1],
    price: items[2][2],
  },
];
