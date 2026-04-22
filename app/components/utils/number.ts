// src/utils/number.ts

export const toNumber = (val: any): number => {
  const n = Number(val);
  return isNaN(n) ? 0 : n;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const roundTo = (value: number, base: number = 100): number => {
  return Math.round(value / base) * base;
};
