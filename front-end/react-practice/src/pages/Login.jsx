import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"


const Login =()=>{
    //執行useNavigate得到跳轉函數  
    const navigate=useNavigate() 
    const gohome=()=>{
        //正常跳轉
        // navigate('/')
        //替換跳轉
        //navigate('/',{replace:true})
        //路由傳參方式一:searchParams(多參數用&隔開)
        // navigate('/about?id=1001&name=cp')
        //路由傳參方式二:params
        navigate('/about/1001')
        
    }
    const login=()=>{}
    return <div>this is login<button onClick={gohome}>login</button></div>
}

export default Login