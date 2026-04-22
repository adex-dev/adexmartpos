// src/utils/validation.ts

export const isEmpty = (val: any): boolean => {
  return val === null || val === undefined || val === '';
};

export const isEmail = (val: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
};

export const minLength = (val: string, length: number): boolean => {
  return val.length >= length;
};

export const isNumber = (val: any): boolean => {
  return !isNaN(Number(val));
};
