import { useState, Suspense } from 'react';
import { preload } from './features';
import { Store, Dollar } from '@boxicons/react';
import {
  StoreTab,
  TaxTab,
  ReceiptTab,
  PaymentTab,
  InventoryTab,
} from './features/template';

export default function SettingsPage() {
  const [tab, setTab] = useState('store');
  //   useEffect(() => {
  //     preload.store();
  //   }, []);
  const TABS = {
    store: StoreTab,
    tax: TaxTab,
    receipt: ReceiptTab,
    payment: PaymentTab,
    inventory: InventoryTab,
  };

  const ActiveTab = TABS[tab];
  return (
    <div className="bg-gray-300/70 px-3 pt-4 min-h-[89vh] max-h-[91vh] overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>
        <div className="tabs tabs-boxed mb-6">
          <div className="tabs tabs-boxed mb-6">
            <label className="tab">
              <Store size="xs" />
              <button
                onMouseEnter={() => preload.store()}
                className={`tab ${tab === 'store' && 'tab-active'}`}
                onClick={() => setTab('store')}
              >
                Store
              </button>
            </label>
            <label className="tab">
              <Dollar size="xs" />
              <button
                onMouseEnter={() => preload.tax()}
                className={`tab ${tab === 'tax' && 'tab-active'}`}
                onClick={() => setTab('tax')}
              >
                Tax
              </button>
            </label>
            <button
              onMouseEnter={() => preload.receipt()}
              className={`tab ${tab === 'receipt' && 'tab-active'}`}
              onClick={() => setTab('receipt')}
            >
              Receipt
            </button>
            <button
              onMouseEnter={() => preload.payment()}
              className={`tab ${tab === 'payment' && 'tab-active'}`}
              onClick={() => setTab('payment')}
            >
              Payment
            </button>
            <button
              onMouseEnter={() => preload.inventory()}
              className={`tab ${tab === 'inventory' && 'tab-active'}`}
              onClick={() => setTab('inventory')}
            >
              Inventory
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <Suspense fallback={<Loading />}>
              {ActiveTab ? <ActiveTab /> : null}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex justify-center py-10">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
}
