// src/utils/calculation.ts

export const calculateSubtotal = (price: number, qty: number): number => {
  return price * qty;
};

export const calculateDiscount = (
  amount: number,
  discount: number,
  type: 'percent' | 'nominal',
): number => {
  if (type === 'percent') {
    return (amount * discount) / 100;
  }
  return discount;
};

export const calculateTax = (amount: number, taxPercent: number): number => {
  return (amount * taxPercent) / 100;
};

export const calculateTotal = ({
  subtotal,
  discount = 0,
  tax = 0,
}: {
  subtotal: number;
  discount?: number;
  tax?: number;
}): number => {
  return subtotal - discount + tax;
};

export const calculateChange = (paid: number, total: number): number => {
  return paid - total;
};
