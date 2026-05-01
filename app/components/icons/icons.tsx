// src/components/Icon.tsx

import Report from "@/assets/img/investment.png";
import Transaksi from "@/assets/img/cashier.png";
import Dashboard from "@/assets/img/categories.png";
import Logout from "@/assets/img/logout.png";
import Product from "@/assets/img/product.png";
import Settings from "@/assets/img/setting.png";
import Stock from "@/assets/img/stock.png";

const Icons = {
  Dashboard,
  Logout,
  Product,
  Transaksi,
  Stock,
  Settings,
  Report,
} as const;

type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  size?: number;
};

export const Icon = ({ name, size = 24 }: IconProps) => {
  return (
    <img
      src={Icons[name]}
      width={size}
      height={size}
      alt={name}
    />
  );
};