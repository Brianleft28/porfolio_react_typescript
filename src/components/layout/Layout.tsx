import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-primary">
      <Navbar />
      <div className="min-h-[calc(100vh-65px)]  bg-gradient-to-br from-background via-content1-foreground to-background p-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;
