export default function ReceiptTab() {
  return (
    <div className="space-y-4">
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Receipt Footer"
      />
      <label className="flex gap-3 items-center">
        <input type="checkbox" className="toggle" />
        Auto Print
      </label>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
