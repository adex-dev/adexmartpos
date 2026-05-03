import { useEffect, useState } from 'react';
import { useAuth } from '../services/AuthContext';
import { parseStore } from '../utils/datausers';

export const Adexmart = () => {
  const [rawStore, setRawStore] = useState([]);
  const { storeContext } = useAuth();
  const dataStore = parseStore(storeContext);
  useEffect(() => {
    dataStore ? setRawStore(dataStore) : setRawStore([]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-wide">
      {rawStore['Name'] ? (
        rawStore['Name']
      ) : (
          <>
          ADEX<span className="text-primary">MART</span>
          </>
        )}
        </h1>

      {/* Subtitle */}
      <p className="mt-3 text-gray-500 max-w-md">
        Sistem Point of Sale untuk manajemen transaksi, stok, dan laporan bisnis
        secara real-time.
      </p>

      {/* Divider */}
      <div className="mt-6 w-24 h-1 bg-primary rounded-full" />

      {/* Info kecil */}
      <p className="mt-4 text-xs text-gray-400">
        {
          rawStore['Address'] ? (
             `${rawStore['Address']},${rawStore['Cities']},${rawStore['Province']}`
          ):("Dashboard Overview")
        }
      </p>
        {
          rawStore['Phone1'] ? (
            <p className="mt-2 text-xs text-gray-400">
             {rawStore['Phone2'] ? (rawStore['Phone1']+"||"):(rawStore['Phone1'])} {rawStore['Phone2']}
                   </p>
          ):("")
        }

    </div>
  );
};
