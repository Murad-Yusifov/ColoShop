import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/header/Header'
import Section from './components/section1/Section'
import Section2 from './components/section2/Section2'
import Cart from './components/carts/Cart'

function App() {
  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setData(res.data)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <div>
      <Header />
      <Section />
      <Section2 />
      <div className='styles'>
        {data && data.slice(0,10).map((x) => <Cart item ={x} key={x.id}/>)}
      </div>
      
    </div>
    </>
  )
}

export default App
