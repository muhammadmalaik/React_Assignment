import React from 'react'
import ModelCss from './Model.module.css'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.webp'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.webp'
import img9 from '../../assets/img9.webp'
import img10 from '../../assets/img10.webp'
import img11 from '../../assets/img11.webp'
import img12 from '../../assets/img12.webp'
const Model = () => {
  return (
    <>
    <h1 style={{fontSize:"50px",fontWeight:'bold',textAlign:'center'}}>ALL BMW MODELS</h1>
    <p style={{fontSize:'18px',textAlign:'center',fontWeight:'bold'}}>Find your BMW</p>
    <div className={ModelCss.main}>
        <div className={ModelCss.imgsec1}>
            <div style={{width:'100%'}}>
                <img style={{width:'100%'}} src={img1} alt="" />
            </div>
            <div style={{width:"60%"}}>
                <div>
                <img style={{width:"100%",height:'232px'}} src={img2} alt="" />
                </div>
                <div>
                <img style={{width:"100%",height:'233px'}}  src={img3} alt="" />
                </div>
            </div>
        </div>
        <div className={ModelCss.imgsec2}>
            <img style={{width:"33%"}} src={img4} alt="" />
            <img style={{width:"33%"}} src={img5} alt="" />
            <img style={{width:"34%"}} src={img6} alt="" />
        </div>
        <div className={ModelCss.imgsec3}>
            <div style={{width:"60%"}}>
                <div>
                <img style={{width:"100%",height:'232px'}} src={img7} alt="" />
                </div>
                <div>
                <img style={{width:"100%",height:'233px'}}  src={img9} alt="" />
                </div>
            </div>
            <div style={{width:'100%'}}>
                <img style={{width:'100%'}} src={img8} alt="" />
            </div>
        </div>
         <div className={ModelCss.imgsec4}>
            <img style={{width:"33%"}} src={img10} alt="" />
            <img style={{width:"33%"}} src={img11} alt="" />
            <img style={{width:"34%"}} src={img12} alt="" />
        </div>
        
    </div>
    </>
  )
}

export default Model