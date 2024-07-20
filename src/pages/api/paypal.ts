import { NextApiRequest, NextApiResponse } from 'next';

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

type ResponseData = {
  id: string;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '100.00',
        },
      },
    ],
  });

  const response = await clientPaypal().execute(request);

  res.status(200).json({ id: response.result.id });
}
