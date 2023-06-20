import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import SearchNav from "../Component/SearchNav/SearchNav";

interface LayoutProps {
  Component: React.ComponentType;
}
export default function Layout({ Component }: LayoutProps) {
  return (
    <div style={{ backgroundColor: "rgb(247,244,241)" }}>
      <Header />
      <SearchNav />
      <div className="container mx-auto table-main px-6">
        <Component />
      </div>

      <Footer />
    </div>
  );
}
