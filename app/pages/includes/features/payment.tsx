export default function PaymentTab() {
  return (
    <div className="space-y-3">
      <label className="flex gap-3">
        <input type="checkbox" className="checkbox" defaultChecked /> Cash
      </label>
      <label className="flex gap-3">
        <input type="checkbox" className="checkbox" defaultChecked /> Card
      </label>
      <label className="flex gap-3">
        <input type="checkbox" className="checkbox" /> E-Wallet
      </label>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
