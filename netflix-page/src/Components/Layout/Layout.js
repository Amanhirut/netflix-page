import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  console.log("Layout is rendering");
  return (
    <>
      <Header /> {/* Shows Header on all pages */}
      <Outlet />  {/* This is where the page content will load */}
      <Footer />  {/* Shows Footer on all pages */}
    </>
  );
}

export default Layout;
