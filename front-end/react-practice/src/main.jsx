import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
//第一步導入組件
//createBrowserRouter-創建路由實例,在方法中定義path和組件對應關係
//RouterProvider-作為組件渲染並傳入createBrowserRouter執行後生成的route實例
import {RouterProvider } from 'react-router-dom'
//導入router/index
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
