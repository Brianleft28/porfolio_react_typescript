import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default CommonLayout;
