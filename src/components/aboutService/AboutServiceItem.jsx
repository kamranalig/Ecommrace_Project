import React from 'react';
import styles from "./AboutServiceItem.module.scss";
const AboutServiceItem = () => {
  return (
    <>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-sharp fa-regular fa-tag"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>Best Prices & Offers</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-regular fa-handshake"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>Wide Assortment</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-sharp fa-solid fa-file-contract"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>Free Delivery</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-solid fa-right-left"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>Easy Returns</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-regular fa-hand-holding-dollar"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>100% Satisfaction</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_icon_section}>
        <i class="fa-brands fa-ideal"></i>
        </div>
        <div className={styles.card_text_section}>
          <h4 className={styles.text}>Great Daily Deal</h4>
          <p className={styles.sub_text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default AboutServiceItem;