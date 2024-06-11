import { FooterItem, cormorant, cormorantLight } from '@/constants';
import {
  PanelListComponent,
  PanelListItem,
  PanelListTitle,
  PanelListWrapper,
} from './styles';
import Link from 'next/link';

type Props = {
  title: string;
  items: FooterItem[];
  alignItems?: string;
};

function PanelList({ title, items, alignItems = 'flex-start' }: Props) {
  return (
    <PanelListWrapper alignItems={alignItems}>
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
