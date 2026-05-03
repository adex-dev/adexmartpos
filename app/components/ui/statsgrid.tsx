import { formatRupiah, terbilang } from "../utils";

type StatsProps = {
  transactions: number;
  revenue: number;
  users: number;
};

export const StatsGrid = ({ transactions, revenue, users }: StatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">

      {/* Transaksi */}
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-gray-500">Transaksi</p>
        <h2 className="text-2xl font-bold">{transactions}</h2>
      </div>

      {/* Pendapatan */}
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-gray-500">Pendapatan</p>
        <h2 className="text-2xl font-bold">
          {formatRupiah(revenue)}
        </h2>
        <p className="text-xs text-gray-500">{terbilang(revenue)}</p>
      </div>

      {/* Users */}
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-gray-500">Users</p>
        <h2 className="text-2xl font-bold">{users}</h2>
      </div>

    </div>
  );
};