import React from 'react';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default SpaServices;
