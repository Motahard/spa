import { NextResponse } from 'next/server';

export const createOrder = () => {
  return NextResponse.json({
    message: 'processing creating order',
  });
};
