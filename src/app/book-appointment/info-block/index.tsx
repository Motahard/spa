import React, { forwardRef } from 'react';
import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import {
  InfoContainer,
  Container,
} from '@/app/book-appointment/info-block/styles';
import { InfoState, Action } from '../reducers/info-reducer';

type Props = {
  state: InfoState;
  dispatch: React.Dispatch<Action>;
};

type Ref = React.LegacyRef<HTMLDivElement>;

const InfoBlock = (props: Props, ref: Ref) => {
  const { dispatch, state } = props;

  const handleChange = (value: string, name: string) => {
    dispatch({
      type: 'CHANGE',
      field: name,
      payload: {
        value: value,
      },
    });
  };

  return (
    <Container ref={ref}>
      <Title fontFamily={cormorant.className} size={40}>
        Enter your information here
      </Title>
      <InfoContainer>
        <InputComponent
          type="text"
          name="firstName"
          placeholder="First Name"
          fontFamily={cormorantLight.className}
          value={state.firstName.value}
          onChange={handleChange}
          error={state.firstName.error}
        />
        <InputComponent
          type="text"
          name="lastName"
          placeholder="Last Name"
          fontFamily={cormorantLight.className}
          value={state.lastName.value}
          onChange={handleChange}
          error={state.lastName.error}
        />
        <InputComponent
          type="email"
          name="email"
          placeholder="Email"
          fontFamily={cormorantLight.className}
          value={state.email.value}
          onChange={handleChange}
          error={state.email.error}
        />
        <InputComponent
          type="tel"
          name="phone"
          placeholder="Phone number"
          fontFamily={cormorantLight.className}
          value={state.phone.value}
          onChange={handleChange}
          error={state.phone.error}
        />
      </InfoContainer>
    </Container>
  );
};

export default forwardRef(InfoBlock);
