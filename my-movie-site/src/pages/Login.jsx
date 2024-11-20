import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLoginSubmit(e) {
    e.preventDefault();

    dispatch(login());
    navigate("/");
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="userId">아이디 : </label>
          <input type="text" name="userId" id="userId" />
        </div>

        <div>
          <label htmlFor="userPassword">비밀번호 : </label>
          <input type="password" name="userPassword" id="userPassword" />
        </div>

        <button>로그인</button>
      </form>
    </>
  );
}
