'use client';

import { SpaContainer } from '@/app/spa-services/styles';
import { spaServicesInfo } from './utils';

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
