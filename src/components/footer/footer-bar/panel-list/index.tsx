import Link from 'next/link';

import {
  PanelListComponent,
  PanelListItem,
  PanelListTitle,
  PanelListWrapper,
} from './styles';

import { cormorant, cormorantLight, FooterItem } from '@/constants';

type Props = {
  title: string;
  items: FooterItem[];
};

const PanelList = ({ title, items }: Props) => {
  return (
    <PanelListWrapper>
      <PanelListTitle className={cormorant.className}>{title}</PanelListTitle>
      <PanelListComponent>
        {items.map(({ id, href, text }) => (
          <PanelListItem key={id} className={cormorantLight.className}>
            <Link href={href}>{text}</Link>
          </PanelListItem>
        ))}
      </PanelListComponent>
    </PanelListWrapper>
  );
};

export default PanelList;
