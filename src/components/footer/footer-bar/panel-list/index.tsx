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

function PanelList({ title, items }: Props) {
  return (
    <PanelListWrapper>
      <PanelListTitle className={cormorant.className}>{title}</PanelListTitle>
      <PanelListComponent>
        {items.map((item) => (
          <PanelListItem key={item.id} className={cormorantLight.className}>
            <Link href={item.href}>{item.text}</Link>
          </PanelListItem>
        ))}
      </PanelListComponent>
    </PanelListWrapper>
  );
}

export default PanelList;
