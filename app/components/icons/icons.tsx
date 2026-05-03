// src/components/Icon.tsx

import Transaksi from "@/assets/img/cashier.png";
import Dashboard from "@/assets/img/categories.png";
import Report from "@/assets/img/investment.png";
import Stock from "@/assets/img/ketersediaan.png";
import Logout from "@/assets/img/logout.png";
import Product from "@/assets/img/product.png";
import Settings from "@/assets/img/setting.png";
import Categories from "@/assets/img/stock.png";

const Icons = {
  Dashboard,
  Logout,
  Product,
  Transaksi,
  Categories,
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