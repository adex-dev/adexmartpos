// src/utils/storage.ts

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = <T>(key: string): T | null => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};
