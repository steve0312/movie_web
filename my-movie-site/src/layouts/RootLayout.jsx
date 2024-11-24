import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <footer className="footer">
        Copyright © 2024 by Sangho. All rights reserved.
      </footer>
    </>
  );
}
