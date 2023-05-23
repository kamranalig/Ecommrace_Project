import React from 'react';
import styles from "./ServiceList.module.scss";
import ServiceItem from './ServiceItem';
const ServiceList = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.services_section}>
                <div className={styles.services}>
                    <div className={styles.text_top}>
                        <h6 className={styles.services_text_top}>Best Product</h6>
                    </div>
                    <div className={styles.services_main_title}>
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className={styles.services_line}>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.services_card_section}>
                        <div className={styles.card_section}>
                            <ServiceItem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceList;