import React from 'react'
import styles from './Section2.module.scss';

const Section2 = (item) => {
  return (
    <div>
        <section>
          <div className={styles.new}>
        <h1>New Arrivals</h1>
        </div>
        <div className={styles.center}>
       <div className={styles.underLine}></div>
        </div>
        <div className={styles.cat}>
            <div className={styles.cat2}>ALl</div>
            <div className={styles.cat1}>Women's</div>
            <div className={styles.cat1}>accessories</div>
            <div className={styles.cat1}>men's</div>
        </div>
        </section>
    </div>
  )
}

export default Section2