import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8088/user/login", {
        userId,
        password,
      });

      if (response.data.success) {
        const token = response.data.data;
        localStorage.setItem("token", token); // 保存token
        localStorage.setItem("userId", userId); // 保存用戶ID
        navigate("/account"); // 跳轉到帳號頁面
      } else {
        setError(response.data.message || "登入失敗，請檢查帳號密碼");
      }
    } catch (err) {
      setError("登入失敗，伺服器未響應");
    }
  };

  return (
    <div>
      <h1>登入</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>用戶ID：</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>密碼：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default LoginPage;
