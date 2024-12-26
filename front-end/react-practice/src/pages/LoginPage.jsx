import React from "react";
import { login, userinfo } from "../api/userService";
import LoginForm from "../component/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (userId, password) => {
    try {
      const response = await login(userId, password);
      if (response.success) {
        localStorage.setItem("userinfo", JSON.stringify(response.data));
        alert("登入成功！");
        navigate(`/`);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
      alert("登入失敗，請稍後再試。");
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
