import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // 獲取當前用戶資訊
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/user/${userId}`);
        const user = response.data.data;
        setUserName(user.userName);
        setEmail(user.email);
      } catch (err) {
        console.error("獲取用戶資訊失敗", err);
        setMessage("無法獲取用戶資料，請重新登入");
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8088/user", {
        userId,
        userName,
        email,
      });

      if (response.data.success) {
        setMessage("更新成功！");
      } else {
        setMessage("更新失敗，請重試");
      }
    } catch (err) {
      setMessage("更新失敗，伺服器未響應");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div>
      <h1>帳號資訊</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>用戶名：</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email：</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">更新</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        登出
      </button>
    </div>
  );
};

export default AccountPage;
