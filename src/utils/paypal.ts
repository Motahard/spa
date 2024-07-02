import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const configureEnvironment = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) return null;

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const client = () => {
  const enviroment = configureEnvironment();
  if (enviroment === null) return null;
  return new checkoutNodeJssdk.core.PayPalHttpClient(enviroment);
};

export default client;
