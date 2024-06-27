type Property = {
  value: string;
  error?: string | null;
};

export type State = {
  firstName: Property;
  lastName: Property;
  phone: Property;
  email: Property;
  additionalInfo: Property;
};

export const initialState = {
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
  additionalInfo: {
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

export const formReducer = (state: State, action: Action) => {
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
          value: state[action.field as keyof State].value,
          error: null,
        },
      };
    }
    case 'RESET_FORM': {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
