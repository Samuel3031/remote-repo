//導入searchParams
import { useSearchParams , useParams} from "react-router-dom"

const About =()=>{

    //路由傳參
    //獲取通過searchParams過來的id參數
    //const [params]=useSearchParams();
    //const id=params.get('id')取參數{id}
    //const name=params.get('name')取參數{name}

    const params=useParams();
    console.log(params);
    return <div>this is About {params.id}</div>
}

export default About