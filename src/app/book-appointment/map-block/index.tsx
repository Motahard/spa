import React from 'react';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import {
  Container,
  MapContainer,
  MapDescription,
  MapDesciptionItem,
} from '@/app/book-appointment/map-block/styles';
import Title from '@/components/title';
import Paragraph from '@/components/paragraph';
import { cormorantLight } from '@/constants';

export const MapBlock = () => {
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
          <Paragraph fontFamily={cormorantLight.className}>
            Sunday - Closed
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Monday 10 a.m.-5:30 p.m.
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Tuesday 10 a.m.-5:30 p.m.
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Wednesday 10 a.m.-5:30 p.m.
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Thursday 10a.m.-5:30 p.m.
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Friday 10 a.m.-5:30 p.m.
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className}>
            Saturday 10 a.m.-5:30 p.m.
          </Paragraph>
        </MapDesciptionItem>
      </MapDescription>
    </Container>
  );
};
