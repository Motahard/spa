'use client';

import { spaServicesInfo } from './utils';

import { SpaContainer } from '@/app/spa-services/styles';

function SpaServices() {
  return (
    <SpaContainer>
      {spaServicesInfo.map(({ Component, description, props }) => (
        <Component {...props} key={description}>
          {description}
        </Component>
      ))}
    </SpaContainer>
  );
}

export default SpaServices;
