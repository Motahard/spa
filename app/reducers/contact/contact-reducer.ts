import { initialContactState } from '@/app/reducers/contact/initState';
import { ContactAction, ContactState } from '@/app/reducers/contact/types';

export const contactReducer = (state: ContactState, action: ContactAction) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        [action.field]: { value: action.payload.value, error: null },
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        [action.field]: {
          value: action.payload.value,
          error: action.payload.error,
        },
      };
    }
    case 'CLEAR_ERROR': {
      return {
        ...state,
        [action.field]: {
          value: state[action.field as keyof ContactState].value,
          error: null,
        },
      };
    }
    case 'RESET_FORM': {
      return {
        ...initialContactState,
      };
    }
    default: {
      return state;
    }
  }
};
