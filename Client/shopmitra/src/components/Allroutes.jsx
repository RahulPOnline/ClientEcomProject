import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Electronics from '../pages/Electronics'
import Footwear from '../pages/Footwear'
import Kids from '../pages/Kids'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
 
export default function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/footwear' element={<Footwear/>}/>
    </Routes>
  )
}
