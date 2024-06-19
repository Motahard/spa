import { useState } from 'react';
import { InputComponent, InputProps } from '@/components/input';
import { ValidationError } from 'yup';

export const useInput = (props: InputProps): [string, JSX.Element] => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const clearError = () => setError('');

  const handleChange = async (value: string ) => {
    const { validation, schemaName } = props;

    if (value) {
      clearError();
      
      setInputValue(value);

      if(!schemaName) return;

      try {
        await validation?.validateAt(schemaName, inputValue, { strict: true  });
      } catch (err) {
        const e = err as ValidationError;
        setError(e.errors.join('\n'));
        console.log(e.errors)
      }
    } else {
      setError('Enter please value');
    }
  };

  const Input = (
    <InputComponent {...props} onChange={handleChange} error={error} />
  );

  return [inputValue, Input];
};
