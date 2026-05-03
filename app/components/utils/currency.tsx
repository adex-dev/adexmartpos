// src/utils/currency.ts

/**
 * Format number ke Rupiah
 * contoh: 100000 -> "Rp 100.000"
 */
export const formatRupiah = (
  value: number | string,
  withPrefix: boolean = true,
): string => {
  const number = normalizeToNumber(value);

  const formatted = new Intl.NumberFormat('id-ID').format(number);

  return withPrefix ? `Rp ${formatted}` : formatted;
};

/**
 * Hapus semua karakter non digit
 * contoh: "Rp 100.000" -> "100000"
 */
export const stripNonNumeric = (value: string): string => {
  return value.replace(/[^\d]/g, '');
};

/**
 * Convert ke number (aman dari berbagai format)
 * contoh:
 * "100.000" -> 100000
 * "Rp 10,000" -> 10000
 */
export const normalizeToNumber = (value: number | string): number => {
  if (typeof value === 'number') return value;

  const cleaned = stripNonNumeric(value);

  return Number(cleaned || 0);
};

/**
 * Format input realtime (untuk input field)
 * contoh: ketik 100000 -> "100.000"
 */
export const formatInputRupiah = (value: string): string => {
  const number = stripNonNumeric(value);

  if (!number) return '';

  return new Intl.NumberFormat('id-ID').format(Number(number));
};

/**
 * Terbilang (angka ke huruf Indonesia)
 * contoh: 12500 -> "dua belas ribu lima ratus rupiah"
 */
export const terbilang = (value: number): string => {
  const angka = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
  ];

  const toWords = (n: number): string => {
    if (n < 12) return angka[n];
    if (n < 20) return toWords(n - 10) + ' belas';
    if (n < 100)
      return toWords(Math.floor(n / 10)) + ' puluh ' + toWords(n % 10);
    if (n < 200) return 'seratus ' + toWords(n - 100);
    if (n < 1000)
      return toWords(Math.floor(n / 100)) + ' ratus ' + toWords(n % 100);
    if (n < 2000) return 'seribu ' + toWords(n - 1000);
    if (n < 1000000)
      return toWords(Math.floor(n / 1000)) + ' ribu ' + toWords(n % 1000);
    if (n < 1000000000)
      return toWords(Math.floor(n / 1000000)) + ' juta ' + toWords(n % 1000000);
    if (n < 1000000000000)
      return toWords(Math.floor(n / 1000000000)) + ' miliar ' + toWords(n % 1000000000);

    return 'terlalu besar';
  };

  return `${toWords(value).trim()} rupiah`;
};
