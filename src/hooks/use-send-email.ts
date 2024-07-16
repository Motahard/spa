import { useCallback, useEffect, useState } from 'react';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

type Props = Record<string, string> & { recipient: string };

export const useSendEmail = () => {
  const [data, setData] = useState<EmailJSResponseStatus>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const clearError = () => setError('');

  useEffect(() => {
    emailjs.init({ publicKey: process.env.EMAIL_PUBLIC || '' });
  }, []);

  const apiMethod = useCallback(async (props: Props) => {
    setLoading(true);

    if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_TEMPLATE_ID) {
      setError('Keys is not provided');
      setLoading(false);
      return;
    }

    if (!props.recipient) {
      setError('Recipient is not entered');
      setLoading(false);
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        props
      );

      if (response) {
        setData(response);
      }
    } catch (err) {
      const e = err as PromiseRejectedResult;
      setError(e.reason);
    }

    setLoading(false);
  }, []);

  return {
    sendEmail: apiMethod,
    clearError,
    error,
    data,
    loading,
  };
};
