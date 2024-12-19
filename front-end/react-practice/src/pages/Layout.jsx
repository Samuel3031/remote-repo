import { Link, Outlet } from "react-router-dom"

import axios from "axios";

async function getlist(){

  const res = await axios.get(`http://localhost:8088/user/1`)
  console.log(res) 
}
axios.get(`http://localhost:8088/user/1`)
const Layout=()=>{
    getlist()
    return <div>當前是一級路由
        <div>
            <p>
                <Link to="/">看板</Link>
                <Link to="/article">文章</Link>
            </p>
        </div>
        <div>
            二級路由
            <Outlet/>
        </div>
    </div>
}

export default Layout