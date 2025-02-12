import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductData } from "../ProductData";
import styles from "./CardDetail.module.css"; // Import CSS Module

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  const product = ProductData.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2 className={styles.error}>Product Not Found</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{product.title}</h1>
        <img src={product.image} alt={product.title} className={styles.image} />
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.rating}>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>
        <button className={styles.button} onClick={gotoHomePage}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
