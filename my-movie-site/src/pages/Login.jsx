import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // 이전 페이지 경로가 있으면 그 페이지로, 없으면 메인 페이지로 이동
  const location = useLocation();
  const from = location.state?.from || "/";

  // 로그인 했을 때 뒤로가기 하면 홈으로 이동
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  // 더미데이터로 로그인 처리해서 그냥 아이디, 비밀번호 입력하고 로그인 버튼 누르면 로그인 상태로 전환
  function handleLoginSubmit(e) {
    e.preventDefault();

    dispatch(login());
    // navigate("/");
    navigate(from, { replace: true });
  }

  return (
    <div className="loginWrapper">
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <div className="flexEven contentCenter">
          <label htmlFor="userId">아이디</label>
          <input type="text" name="userId" id="userId" />
        </div>

        <div className="flexEven contentCenter">
          <label htmlFor="userPassword">비밀번호</label>
          <input type="password" name="userPassword" id="userPassword" />
        </div>

        <button>로그인</button>
      </form>
    </div>
  );
}
