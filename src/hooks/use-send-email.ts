import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useCallback, useEffect, useState } from 'react';

type Props = Record<string, string>;

export const useSendEmail = () => {
    const [data, setData] = useState<EmailJSResponseStatus>()
    const [error, setError] = useState<PromiseRejectedResult>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        emailjs.init({ publicKey: process.env.EMAIL_PUBLIC || '' });
    }, []);

    const apiMethod = useCallback(async (props: Props) => {
        setLoading(true);

        if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_TEMPLATE_ID) return;

        try {
            const response = await emailjs.send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, props);

            if (response) {
                setData(response)
            }
        } catch (err) {
            const e = err as PromiseRejectedResult;
            setError(e);
        }

        setLoading(false);
    }, []);

    return {
        sendEmail: apiMethod,
        error,
        data, 
        loading
    }
};