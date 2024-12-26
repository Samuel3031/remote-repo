//配置路由對應關係
import { createBrowserRouter,createHashRouter } from 'react-router-dom';
//第二步生成實例
import Home from '../pages/Home'
import Login from '../pages/LoginPage'
import About from '../pages/About'
import Layout from '../pages/Layout'
import Info from '../pages/Info';
import Edit from '../pages/Edit';
import NotFound from '../pages/NotFound'
import Create from '../pages/Create'

//createBrowserRouter->history模式路由
//createHashRouter->hash模式路由

const router=createBrowserRouter([
  {
    path:'/',element:<Layout/>,//渲染物件
  },
  {
    path:'/info',element:<Info/>
  },
  {
    path:'/edit',element:<Edit/>
  },
  {
    path:'/login',element:<Login/>,
  },
  {
    path:'/about/:id',element:<About/>,
  },
  {
    path:'/create',element:<Create/>,
  },
  {
    path:'*',element:<NotFound/>,
  }
])

export default router