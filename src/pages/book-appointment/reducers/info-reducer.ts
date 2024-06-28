type FieldValue = {
  value: string;
  error?: string | null;
};

export type InfoState = {
  firstName: FieldValue;
  lastName: FieldValue;
  phone: FieldValue;
  email: FieldValue;
};

export const initialInfoState = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  phone: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
};

export type Action = {
  type: string;
  payload: {
    value: string;
    error?: string | null;
  };
  field: string;
};

export const infoReducer = (state: InfoState, action: Action) => {
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
