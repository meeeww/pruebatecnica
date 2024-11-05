import { FC } from "react";

import Header from "./components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-8 pt-1">{children}</main>
    </div>
  );
};

export default Layout;
