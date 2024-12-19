import React from "react";
import { createBrowserRouter,createHashRouter } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";

const router =createBrowserRouter([
  {
    path:"/", element:<div>你好123</div>,
  },
  {
    path:"/login", element:<LoginPage />,
  },
  {
    path:"/account", element:<AccountPage />,
  }
])
 

export default router;
