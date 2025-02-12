// import React from "react";
// import { Link } from "react-router-dom";
// import { ProductData } from "../ProductData"; 

// const CardList = () => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <div className="card-container">
//         {ProductData.map((product) => (
//           <div key={product.id} className="card">
//             <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <p>${product.price}</p>
//             <Link to={`/card/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;



import React from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../ProductData"; 
import styles from "./CardList.module.css"; // Import CSS Module

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product List</h1>
      <div className={styles.cardContainer}>
        {ProductData.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <Link to={`/card/${product.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
