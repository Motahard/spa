import { linksWithDescription } from '@/app/constants';

export const getNavbarItems = (
  titles: string[]
): { uri: string; name: string }[] => {
  return linksWithDescription.map((item, index) => {
    return {
      uri: item,
      name: titles[index],
    };
  });
};
