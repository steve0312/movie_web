import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
