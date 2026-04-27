import { lazy } from 'react';

const loadStore = () => import('./store');
const loadTax = () => import('./tax');
const loadReceipt = () => import('./receipt');
const loadPayment = () => import('./payment');
const loadInventory = () => import('./inventory');

export const StoreTab = lazy(loadStore);
export const TaxTab = lazy(loadTax);
export const ReceiptTab = lazy(loadReceipt);
export const PaymentTab = lazy(loadPayment);
export const InventoryTab = lazy(loadInventory);

// export preload function
export const preload = {
  store: loadStore,
  tax: loadTax,
  receipt: loadReceipt,
  payment: loadPayment,
  inventory: loadInventory,
};
