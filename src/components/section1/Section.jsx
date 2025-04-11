import React from "react";
import styles from './Section.module.scss';

const Section = () => {
  return (
    <div>
      <main>
        <section className={styles.section}>
          <p>Spring / Summer Collection 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button>SHOP NOW</button>
        </section>
        <section className={styles.section2}>
          <div className={`${styles.card} ${styles.card1}`}>
            <p>WOMEN'S</p>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <p>accessories's</p>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <p>MEN's</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Section;
