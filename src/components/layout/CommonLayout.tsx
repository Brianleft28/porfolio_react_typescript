import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: LayoutProps) => {
  return <div className="lg:px-24 md:px-20 px-10">{children}</div>;
};

export default CommonLayout;
