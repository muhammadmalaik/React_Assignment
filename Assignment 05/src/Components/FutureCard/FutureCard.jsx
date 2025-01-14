import React from 'react'
import future from './Future.module.css'
import Button from '../Button/Button'
import desccard2 from '../../assets/descCard2.webp'
import desccard3 from '../../assets/descCard3.webp'
import desccard4 from '../../assets/descCard4.webp'
const FutureCard = () => {
  return (
    <>
        <div className={future.main}>
            <div className={future.desc}>
                <h1>The BMW Podcast: Changing Lanes</h1>
                <p>Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!</p>
                <Button name = 'Listen now'/>
            </div>
            <div className={future.descCard}>
                <img style={{width:"30%"}} src={desccard2} alt="" />
                <img style={{width:"30%"}} src={desccard3} alt="" />
                <img style={{width:"30%"}} src={desccard4} alt="" />
            </div>
        </div>

    </>
  )
}

export default FutureCard