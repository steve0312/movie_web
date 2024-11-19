import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="flexBetween">
        <h1>
          <Link to="/" className="textRed underLineNone">
            내플릭스
          </Link>
        </h1>
        <Link to="/login" className="contentCenter underLineNone textBlack">
          로그인
        </Link>
      </nav>
    </>
  );
}
