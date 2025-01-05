export type ContactAction = {
  type: string;
  payload: {
    value: string;
    error?: string | null;
  };
  field: string;
};

export type ContactFieldValue = {
  value: string;
  error?: string | null;
};

export type ContactState = {
  firstName: ContactFieldValue;
  lastName: ContactFieldValue;
  phone: ContactFieldValue;
  email: ContactFieldValue;
  additionalInfo: ContactFieldValue;
};
