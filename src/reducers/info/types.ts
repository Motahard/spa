export type InfoFieldValue = {
  value: string;
  error?: string | null;
};

export type InfoAction = {
  type: string;
  payload: {
    value: string;
    error?: string | null;
  };
  field: string;
};
export type InfoState = {
  firstName: InfoFieldValue;
  lastName: InfoFieldValue;
  phone: InfoFieldValue;
  email: InfoFieldValue;
  card: InfoFieldValue;
  expiry: InfoFieldValue;
  cvv: InfoFieldValue;
  name: InfoFieldValue;
};
