type FieldValue = {
  value: string;
  error?: string | null;
};

export type InfoState = {
  card: FieldValue;
  expiry: FieldValue;
  cvv: FieldValue;
  recepient: FieldValue;
};

export const initialPaymentState = {
  card: {
    value: '',
    error: null,
  },
  expiry: {
    value: '',
    error: null,
  },
  cvv: {
    value: '',
    error: null,
  },
  recepient: {
    value: '',
    error: null,
  },
};

type Action = {
  type: string;
  payload: {
    value: string;
    error?: string | null;
  };
  field: string;
};

export const formReducer = (state: InfoState, action: Action) => {
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
        ...initialPaymentState,
      };
    }
    default: {
      return state;
    }
  }
};
