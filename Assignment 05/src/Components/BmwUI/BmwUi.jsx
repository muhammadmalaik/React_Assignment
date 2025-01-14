import React from 'react'
import Navbar from '../Navbar/Navbar'
import Img from '../Img/Img'
import BmwCard from '../BmwCard/BmwCard'
import FutureCard from '../FutureCard/FutureCard'
import Model from '../BmwModel/Model'
import Footer from '../Footer/Footer'
const BmwUi = () => {
  return (
    <>
    <Navbar />
    <Img />
    <BmwCard />
    <FutureCard />
    <Model />
    <Footer />
    {/* <h1 onClick={toogleFunc}>Adnan</h1> */}
    </>
  )
}

export default BmwUi