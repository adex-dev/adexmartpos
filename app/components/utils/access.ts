import type { ReactNode } from "react";
import { useAuth } from "../services/AuthContext";

type CanProps = {
  access: string;
  children?: ReactNode;
};
export const Can: React.FC<CanProps> = ({ access, children }) => {
  const { hasAccess } = useAuth();
 return hasAccess(access) ? children : null;
};