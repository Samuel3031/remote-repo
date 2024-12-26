import {
  createBrowserRouter,
  createHashRouter,
  useSearchParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logout from "../component/Logout";


const Info = () => {
    const navigate = useNavigate();
    const userinfo = localStorage.getItem("userinfo");
    const user = userinfo ? JSON.parse(userinfo) : null; 
    
    if (!user) {
        return <div>未找到用戶資料，請重新登入。</div>; // 處理空資料
    }
    const handleBack = () => {
      navigate(-1); 
    };
    return (
<div>
  <div className="wrapper">
    <h1>用戶資料</h1>
    <form className="create-form">
      <div className="form-group">
        <label>用戶ID：</label>
        <input
          type="text"
          value={user.userId}
          readOnly
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>姓名：</label>
        <input
          type="text"
          value={user.userName}
          readOnly
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>密碼：</label>
        <input
          type="password"
          value={user.password ? user.password.replace(/./g, '*') : '無密碼資料'}
          readOnly
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email：</label>
        <input
          type="email"
          value={user.email}
          readOnly
          className="form-control"
        />
      </div>
      </form>
    <button onClick={() => navigate('/edit',{ state: null })} className="submit-btn">
    編輯資料
    </button>
    <button onClick={handleBack} className="submit-btn">
    返回
    </button>
    <Logout/>
  </div>
</div>
      );
    };
    

export default Info;
