import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-primary">
      <Navbar />
      <div className="min-h-[calc(100vh-65px)] overflow-hidden lg:px-24 md:px-20 px-10 bg-gradient-to-br from-background via-content3 to-content4 p-3 justify-center items-center flex">
        {children}
      </div>
    </div>
  );
};

export default Layout;
