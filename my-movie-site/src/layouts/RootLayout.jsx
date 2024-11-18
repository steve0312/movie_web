import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <footer>footer</footer>
    </>
  );
}
