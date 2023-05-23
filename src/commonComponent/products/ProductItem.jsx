import React from 'react';
import styles from "./ProductItem.module.scss";
const ProductItem = () => {
    return (
        <>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <span className={styles.circle}>Sale!</span>
                    <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/03/tshirt4-300x300.jpg" alt="" />
                    <p className={styles.hover_text}>Quick View</p>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>Tshirt</span>
                    <h2 className={styles.card_title}>PRINTED BLUE TSHIRT</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>£35.00 </span>
                        </del>
                        <span>£27.00</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <span className={styles.circle}>Sale!</span>
                    <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/03/tshirt4-300x300.jpg" alt="" />
                    <p className={styles.hover_text}>Quick View</p>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>Tshirt</span>
                    <h2 className={styles.card_title}>PRINTED BLUE TSHIRT</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>£35.00 </span>
                        </del>
                        <span>£27.00</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <span className={styles.circle}>Sale!</span>
                    <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/03/tshirt4-300x300.jpg" alt="" />
                    <p className={styles.hover_text}>Quick View</p>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>Tshirt</span>
                    <h2 className={styles.card_title}>PRINTED BLUE TSHIRT</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>£35.00 </span>
                        </del>
                        <span>£27.00</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <span className={styles.circle}>Sale!</span>
                    <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/03/tshirt4-300x300.jpg" alt="" />
                    <p className={styles.hover_text}>Quick View</p>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>Tshirt</span>
                    <h2 className={styles.card_title}>PRINTED BLUE TSHIRT</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>£35.00 </span>
                        </del>
                        <span>£27.00</span>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductItem;