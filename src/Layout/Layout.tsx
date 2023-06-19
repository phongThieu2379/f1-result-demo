import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import SearchNav from "../Component/SearchNav/SearchNav";

interface LayoutProps {
  Component: React.ComponentType;
}
export default function Layout({ Component }: LayoutProps) {
  return (
    <div>
      <Header />
      <SearchNav/>
      <Component />
      <Footer />
    </div>
  );
}
