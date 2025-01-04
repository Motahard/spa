import { ContactState } from './types';

export const setContactValue = (name: string, value: string) => ({
  type: 'CHANGE',
  field: name,
  payload: {
    value,
  },
});

export const setContactError = (
  path: string,
  state: ContactState,
  message: string
) => ({
  type: 'SET_ERROR',
  field: path,
  payload: {
    value: state[path as keyof ContactState].value,
    error: message,
  },
});

export const clearContactError = (name: string, state: ContactState) => ({
  type: 'CLEAR_ERROR',
  field: name,
  payload: {
    value: state[name as keyof ContactState].value,
  },
});

export const resetConctactForm = () => ({
  type: 'RESET_FORM',
  field: '',
  payload: {
    value: '',
  },
});
