import React from 'react'
import frontimg from '../../assets/FrontImg.webp'
import Css from './Img.module.css'
import Button from '../Button/Button'
const Img = () => {
  return (
    <>
    <div className={Css.image}>
    <img style={{width:"100%",height:'700px'}} src={frontimg} alt="" />
    </div>

    <div className={Css.secondPart}>
        <div className={Css.first}>
            <div className={Css.firstpara}>
                <p style={{color:'white',fontSize:"20px"}}>Smart Assistance</p>
                <h1 style={{color:'white',fontSize:"50px"}}>The BMW Driving Companionship</h1>
                <Button name="Read More"/>
            </div>
        </div>
        <div className={Css.second}>
        <div className={Css.firstpara}>
                <p style={{color:'white',fontSize:"20px"}}>Smart Assistance</p>
                <h1 style={{color:'white',fontSize:"50px"}}>The BMW Driving Companionship</h1>
                <Button name="Read More"/>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Img