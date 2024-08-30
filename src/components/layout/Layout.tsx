import { ReactNode } from "react";
import Navbar from "./Navbar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-65px)] bg-default-50 p-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;
