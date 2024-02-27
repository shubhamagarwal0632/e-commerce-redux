import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { Cart } from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoreProduct from './components/MoreProduct'
import { Products } from './components/data'

function App() {
  const [data, setData] = useState([...Products])

  return (
    <>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Product items={data} />} />
          <Route path='/product/:id' element={<MoreProduct/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/moreproduct' element={<MoreProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
