import React from "react";

import NavBar from "../components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
);

export default Layout;
