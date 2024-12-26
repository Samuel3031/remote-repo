import React, { useState } from 'react';
import create from "../pages/Create";
import {
  createBrowserRouter,
  createHashRouter,
  useSearchParams,
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userId, password);
  };

  return (
    <div className="wrapper">
      <h1>登入</h1>
      <form onSubmit={handleSubmit} className="create-form">
        <div>
          <label>ユーザーID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="ユーザーIDを入力してください。"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力してください。"
          />
        </div>
        <button type="submit">登入</button>
      </form>
      <button onClick={() => navigate('/create',{ state: null })} className="submit-btn">
    創建用戶
    </button>
    </div>
  );
};

export default LoginForm;
