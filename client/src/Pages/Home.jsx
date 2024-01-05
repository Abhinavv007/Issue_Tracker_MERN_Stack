import React, { useEffect , useState} from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
function Home() 
{
    const[data,setData] = useState([])
    useEffect(()=>{
    const getData = async()=>{
    const result = await axios.get("http://localhost:9000/api/getprojects")
    if(result){
        setData(result.data.msg)
    }
    }
    getData()
    },[])
  return (
    <div>
     {data && data.map((item)=>{
        return(
            <>
            <ProjectCard  key={item._id} {...item} />
            </>
        )
     })}
    </div>
  )
}

export default Home