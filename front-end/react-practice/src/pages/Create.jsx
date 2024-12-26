import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createuser } from "../api/userService";

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitCreate = async (e) => {
    
    e.preventDefault();
    const createdUser = {
        userName: formData.userName,
        password: formData.password,
        email: formData.email,
    };
    try {
      const result = await createuser(
        createdUser.userName,
        createdUser.password,
        createdUser.email
      );
      const uid = result.data?.userId;
      alert(`你的ID為: ${uid}`)
    } catch (error) {
      alert("創建失敗");
    }
  };
  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <div className="wrapper">
      <h1>創建用戶</h1>
      <form onSubmit={submitCreate} className="create-form">
        <div className="form-group">
          <label>姓名：</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={formData.userName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>密碼：</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email：</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">
          創建用戶
        </button>
      </form>
      <button onClick={handleBack} className="submit-btn">
          返回
        </button>
    </div>
  );
};

export default Create;