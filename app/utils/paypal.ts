import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

import { envVariables } from '@/app/constants/environment';

const configureEnvironment = () => {
  const clientId = envVariables.PAYPAL_CLIENT_ID || '';
  const clientSecret = envVariables.PAYPAL_CLIENT_SECRET || '';

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const clientPaypal = () => {
  const enviroment = configureEnvironment();

  return new checkoutNodeJssdk.core.PayPalHttpClient(enviroment);
};

export default clientPaypal;
