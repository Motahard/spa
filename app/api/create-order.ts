export const createOrder = async () => {
  try {
    const res = await fetch('/api/paypal/', {
      method: 'POST',
    });

    const order = await res.json();
    return order.id;
  } catch (error) {
    console.error('Error on creating payment');
  }
};
