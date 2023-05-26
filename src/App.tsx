import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ProductsPage } from './pages/ProductsPage'
import AboutPages from './pages/AboutPages'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
    <Navigation/> 
     <Routes>
      <Route path='/' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutPages />} />
    </Routes>
    </>
   
  )
}

export default App
