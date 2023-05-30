import React from 'react';
import styles from "./ProductItem.module.scss";
const ProductItem = ({data}) => {
    return (
        <>
        
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <img src={data.img} alt={data.pTitle} />
                   <button className={styles.quick_btn}>Quick View</button>
                </div>
                <div className={styles.card_text}>
                    <span className={styles.span_text}>{data.subTitle}</span>
                    <h2 className={styles.card_title}>{data.pTitle}</h2>
                    <div className={styles.star_rating}>

                    </div>
                    <span className={styles.price}>
                        <del>
                            <span>{data.pPrice}</span>
                        </del>
                        <span>{data.pDiscountPrice}</span>
                    </span>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ProductItem;