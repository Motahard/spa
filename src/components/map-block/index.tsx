import React from 'react';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { mapBlockTimeConfig } from './config';

import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cormorantLight } from '@/constants';
import {
  Container,
  MapContainer,
  MapDesciptionItem,
  MapDescription,
} from '@/styles/map.styles';

const MapBlock = () => {
  return (
    <Container>
      <MapContainer>
        <YMaps>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 15 }}
            height={500}
            width={500}
          >
            <Placemark defaultGeometry={[55.75, 37.57]} />
          </Map>
        </YMaps>
      </MapContainer>
      <MapDescription>
        <MapDesciptionItem>
          <Title>Our Address:</Title>
          <Paragraph fontFamily={cormorantLight.className}>
            Luxe Animal Spa 80 Smithe St Vancouver, BC V6B 1M7
          </Paragraph>
        </MapDesciptionItem>
        <MapDesciptionItem>
          <Title>Hours of Operation:</Title>
          {mapBlockTimeConfig.map((item) => (
            <Paragraph fontFamily={cormorantLight.className} key={item.id}>
              {item.description}
            </Paragraph>
          ))}
        </MapDesciptionItem>
      </MapDescription>
    </Container>
  );
};

export default MapBlock;
