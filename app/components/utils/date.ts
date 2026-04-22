// src/utils/date.ts

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID').format(date);
};

export const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

export const nowISO = (): string => {
  return new Date().toISOString();
};
