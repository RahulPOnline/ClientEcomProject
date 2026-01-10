import React from 'react'
import Carousal from '../components/Carousal'
import Cards from '../components/Cards'
import SideBar from '../components/SideBar'

export default function Kids() {
  let images = [
    "https://st-images.honasa.in/CODE_25_1920x512_ce67d4f5a4.jpg?format=auto&width=&qualilty=",
    "https://st-images.honasa.in/forbabiesweb1_6b39247c1a.jpg?format=auto&width=&qualilty=",
    "https://st-images.honasa.in/forbabiesweb2_ffe053b960.jpg?format=auto&width=&qualilty=",
  ]
  return (
    <div>
      {/* <h1>Kids</h1> */}
      <Carousal data={images} />

      <div style={{ display: "flex" }}>
        <SideBar/>
        <Cards />

      </div>

    </div>
  )
}
