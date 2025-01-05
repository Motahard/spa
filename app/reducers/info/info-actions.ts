import { InfoState } from './types';

export const setInfoValue = (name: string, value: string) => ({
  type: 'CHANGE',
  field: name,
  payload: {
    value: name === 'name' ? value.toLocaleUpperCase() : value,
  },
});

export const setInfoError = (
  path: string,
  state: InfoState,
  message: string
) => ({
  type: 'SET_ERROR',
  field: path,
  payload: {
    value: state[path as keyof InfoState].value,
    error: message,
  },
});

export const resetInfoForm = () => ({
  type: 'RESET_FORM',
  field: '',
  payload: {
    value: '',
  },
});
