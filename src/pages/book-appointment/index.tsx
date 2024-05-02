import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import {
  BookContainer,
  BookTitleImageWrapper,
  BookTitleWrapper,
  Container,
  FormContainer,
  MapContainer,
} from '@/pages/book-appointment/styles';
import { InfoBlock } from './info-block';
import { DateBlock } from './date-block';

function BookAppoinment() {
  return (
    <Container>
      <BookTitleImageWrapper>
        <BookTitleWrapper>
          <Title fontFamily={cormorant.className} size={70} color="#fff">
            Book An Appointment With Our Groom Specialist Today!
          </Title>
        </BookTitleWrapper>
      </BookTitleImageWrapper>
      <BookContainer>
        <FormContainer>
          <InfoBlock />
          <DateBlock />
        </FormContainer>
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
      </BookContainer>
    </Container>
  );
}

export default BookAppoinment;
