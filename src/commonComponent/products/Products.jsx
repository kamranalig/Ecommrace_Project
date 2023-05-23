import React from 'react';
import ProductItem from './ProductItem';
// import styles from "./Products.module.scss";
const Products = () => {
  return (
    <div className="container mt-5">
      <div className='row'>
        <ProductItem/>
      </div>
    </div>
  )
}

export default Products;