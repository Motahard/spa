import { initialInfoState } from '@/reducers/info/initialState';
import { InfoAction, InfoState } from '@/reducers/info/types';

export const infoReducer = (state: InfoState, action: InfoAction) => {
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
          value: state[action.field as keyof InfoState].value,
          error: null,
        },
      };
    }
    case 'RESET_FORM': {
      return {
        ...initialInfoState,
      };
    }
    default: {
      return state;
    }
  }
};
