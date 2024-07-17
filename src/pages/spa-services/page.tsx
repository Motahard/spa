import React from 'react';

import { SpaContainer } from '@/pages/spa-services/styles';
import { spaServicesInfo } from '@/pages/spa-services/utils';

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
