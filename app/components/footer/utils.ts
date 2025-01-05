import { FooterItem } from '@/app/constants';

export const getFooterBar = (titles: string[], defaultConfig: FooterItem[]) => {
  return defaultConfig.map((item, index) => {
    return {
      ...item,
      text: titles[index],
    };
  });
};
