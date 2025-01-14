import React from 'react'
import BmwCards from './BmwCard.module.css'
import card01 from '../../assets/Card1.webp'
import card02 from '../../assets/Car.webp'
const BMwCard = () => {
  return (
    <>
    <div className={BmwCards.main}>
        <div className={BmwCards.firstCard}>
            <div className={BmwCards.Cardinner}>
            <h1>Learn everything about BMW here</h1>
                <h3>BMW NEWS</h3>
                </div>
                <div className={BmwCards.Cardimg}>
                    <img style={{width:'100%',borderRadius:'10px'}} src={card01} alt="" />
                </div>
        </div>

        <div className={BmwCards.secondCard}>
        <div className={BmwCards.Cardimg}>
            <img style={{width:'100%',borderRadius:'6px'}} src={card02} alt="" />
        </div>
        <div className={BmwCards.Cardinner1}>
        <h1>Become a BMW expert</h1>
        <h3>BMW EXPLAINED</h3>
        </div>
        </div>
    </div>
    </>
  )
}

export default BMwCard