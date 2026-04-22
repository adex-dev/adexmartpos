import { openDB } from 'idb';

const DB_NAME = 'pos-db';
const STORE = 'products';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE, { keyPath: 'id' });
    },
  });
};

export const saveProducts = async (products: any[]) => {
  const db = await initDB();
  const tx = db.transaction(STORE, 'readwrite');

  for (const p of products) {
    tx.store.put(p);
  }

  await tx.done;
};

export const getProducts = async () => {
  const db = await initDB();
  return db.getAll(STORE);
};
