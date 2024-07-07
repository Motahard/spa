import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const configureEnvironment = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID || '';
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET || '';

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const clientPaypal = () => {
  const enviroment = configureEnvironment();

  return new checkoutNodeJssdk.core.PayPalHttpClient(enviroment);
};

export default clientPaypal;
