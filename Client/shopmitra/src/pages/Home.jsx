import React from 'react'
import Carousal from '../components/Carousal'
import Cards from '../components/Cards'
import SideBar from '../components/SideBar'

export default function Home() {
   let images = [
          "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6827264f05a3ddf7.jpeg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/a64908ba9bf2fe36.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/e94a135f02381d3a.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/524c51c50cc676d3.jpeg?q=60"
      ]
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Carousal data={images}/>
     <div style={{display:""}}>
      {/* <SideBar/> */}
      <Cards/>


     </div>

    </div>
  )
}
