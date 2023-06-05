import React from 'react';
import styles from "./Cart.module.scss";
const AddToCartPage = ({cartItems}) => {

  return (
    <>
    <div className={styles.container}>
        {cartItems.length ===  0 && (
        <div>no Items are added</div>
        )}

      <div className={styles.item_section}>
        {
          cartItems.map((item)=>{
            return(
        <div className={styles.item} key={item.id}>
          <div className={styles.item_detail}>
            <div className={styles.img_wrap}>
            <img src={item.img} alt={item.pText}/>
            </div>
            <div className={styles.text_wrap}>
              <h3>PRINTED BLUE TSHIRT</h3>
              <p>T-Shirt</p>
              <p>only 6 item in stock</p>
            </div>
          </div>
          <div className={styles.price_detail}>
            <h6 className={styles.Newpri}>RS.350.00</h6>
            <del className={styles.pri}>RS.750.00</del>
            <p>50%</p>
          </div>
      <div className={styles.counter}>
        <button className={styles.countBtn}>-</button>
        <span>1</span>
        <button className={styles.countBtn}>+</button>
      </div>
        </div>
            )
          })
        }
      </div>
      <div className={styles.bill_section}>
        <button className={styles.final_btn}>Proceed To Pay</button>
      </div>
    </div>
    </>
  )
}

export default AddToCartPage;