import { useState } from 'react';
export default function StoreTab() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveStore = async () => {
    try {
      setLoading(true);

      // contoh call API
      await fetch('/api/settings/store', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      alert('Store saved');
    } catch (err) {
      console.error(err);
      alert('Failed save');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="input input-bordered"
        placeholder="Store Name"
        value={form.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <input
        className="input input-bordered"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
      />

      <input
        className="input input-bordered"
        placeholder="Address"
        value={form.address}
        onChange={(e) => handleChange('address', e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleSaveStore}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
