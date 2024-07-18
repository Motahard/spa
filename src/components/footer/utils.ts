import { FooterItem } from '@/constants';

export const getFooterBar = (titles: string[], defaultConfig: FooterItem[]) => {
  return defaultConfig.map((item, index) => {
    return {
      ...item,
      text: titles[index],
    };
  });
};
