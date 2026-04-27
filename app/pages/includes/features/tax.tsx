import { useState } from 'react';
export default function TaxTab() {
  const [form, setForm] = useState({
    name: '',
    amounttax: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <input
        value={form.name}
        onChange={(e) => handleChange('name', e.target.value)}
        className="input input-bordered"
        placeholder="Tax (%)"
      />
      <input
        value={form.amounttax}
        onChange={(e) => handleChange('amounttax', e.target.value)}
        type="telp"
        className="input input-bordered"
        placeholder="Service (%)"
      />
      <button
        className="btn btn-primary col-span-full"
        // onClick={handleSaveStore}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
