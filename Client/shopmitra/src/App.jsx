import React from 'react'
import Navbar from './components/Navbar'
import Allroutes from './components/Allroutes'
import MainNavbar from './components/MainNavbar'


export default function App() {
  return (
    <div>
      <MainNavbar/>
      <Navbar/>
      <Allroutes/>
    </div>
  )
}
