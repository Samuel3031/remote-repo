import { Link, Outlet } from "react-router-dom";
import { createBrowserRouter,createHashRouter, useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteuser } from "../api/userService";
import Logout from "../component/Logout";

const Layout = () => {
  const navigate = useNavigate();
  const userinfo = localStorage.getItem("userinfo");
  const user = userinfo ? JSON.parse(userinfo) : null;
    //登出

  
//刪除帳戶
  const handleDeleteUser = async () => {
    
  try{
    const response=await deleteuser(user.userId);
    alert(response.message);
    navigate("/login");
  } catch{alert("刪除時出錯"+user.userId);
    console.error("刪除時出錯:", error);
  }}

  return (
    <div className="wrapper">
      登入成功
      <div>
        <p>
        <button onClick={() => navigate('/info',{ state: null })} className="submit-btn">
        使用者資訊
    </button>
    <button onClick={handleDeleteUser} className="submit-btn">
      刪除帳戶
    </button>
    <Logout/>
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Layout;
