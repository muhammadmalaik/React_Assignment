import React from 'react'
import styles from './Card.module.css'

const Card = ({ id, title, price, description, category, image, rating }) => {
    return (


        <div className={styles.card}>
            <img className={styles.image} src={image} />
            <div className={styles.details}>
                <div className={styles.id} >id: {id}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.price} >{price}</div>
                <div className={styles.description} >{description}</div>
                <div className={styles.category}>{category}</div>
                <div className={styles.rating}>Rating: {rating}</div>
            </div>
        </div>

    )
}

export default Card


