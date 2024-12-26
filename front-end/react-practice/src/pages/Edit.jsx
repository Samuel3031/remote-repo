import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editinfo } from "../api/userService";
import Logout from "../component/Logout";

const Edit = () => {
  const navigate = useNavigate();
  const userinfo = localStorage.getItem("userinfo");
  const user = userinfo ? JSON.parse(userinfo) : null;

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        userName: user.userName,
        password: user.password,
        email: user.email,
      });
    }
  }, []); 

  const userSubmit = async (e) => {
    e.preventDefault(); 

    const updatedUser = {
      userId: user.userId,
      userName: e.target.userName.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

    try {
      const result = await editinfo(
        updatedUser.userId, // 傳遞用戶 ID
        updatedUser.userName, // 用戶修改的名稱
        updatedUser.password, // 用戶修改的密碼
        updatedUser.email // 用戶修改的電子郵件
      );


      alert(result.message);
      navigate("/login");
    } catch (error) {
      alert("保存資料時出錯");
      console.error("保存資料時出錯", error);
    }
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="wrapper">
      <h1>編輯用戶資料</h1>
      <form onSubmit={userSubmit} className="create-form">
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
            name="userName"
            defaultValue={formData.userName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>密碼：</label>
          <input
            type="password"
            name="password"
            defaultValue={formData.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email：</label>
          <input
            type="email"
            name="email"
            defaultValue={formData.email}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">
          保存修改
        </button>
      </form>
      <button onClick={handleBack} className="submit-btn">
          取消編輯
        </button>
      <Logout/>
    </div>
  );
};

export default Edit;
