import React from 'react'
import Carousal from '../components/Carousal'
import Cards from '../components/Cards'
import SideBar from '../components/SideBar'

export default function Womens() {
  let images = [
    "https://st-images.honasa.in/1920_512_Generic_GIF_30e04c5b2b.gif?width=&qualilty=",
    "https://st-images.honasa.in/Desktop_6960f948e9.jpg?format=auto&width=&qualilty=",
    "https://st-images.honasa.in/Desktop_a6d6d2d5ad.jpg?format=auto&width=&qualilty=",
  ]
  return (
    <div>
      {/* <h1>Womens</h1> */}
      <Carousal data={images} />
      <div style={{ display: "" }}>
        {/* <SideBar /> */}
        <Cards />

      </div>
    </div>
  )
}
