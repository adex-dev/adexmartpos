export default function InventoryTab() {
  return (
    <div className="space-y-3">
      <label className="flex gap-3">
        <input type="checkbox" className="toggle" /> Track Stock
      </label>
      <label className="flex gap-3">
        <input type="checkbox" className="toggle" /> Allow Negative Stock
      </label>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
