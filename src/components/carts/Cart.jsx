import React from "react";
import styles from "./Cart.module.scss";

const Cart = ({ item }) => {
  return (
    <div className={styles.wrapper}> 
      <div key={item.id} className={styles.card}>
        <img src={item.image} className={styles.img} alt="" />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Cart;
