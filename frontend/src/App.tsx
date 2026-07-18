
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const BACKEND_API = 'http://localhost:8080'
  const [data,setData] = useState<any>({})

  const apidata = async()=>{
    const api = await axios.get(`${BACKEND_API}/api/verison`)
    setData(api.data)
  }

  useEffect(()=>{
    apidata()
  },[])

  return (
    <>
      <h1>I am learning Devops, and in this time i am creating Pipelines</h1>
      <h2>{data.message}</h2>
    </>
  )
}

export default App
