import React from 'react'
import '@styles/HomeProducts.scss';
import { ProductItem } from '@components/ProductItem.jsx';
import useGetProducts from '@hooks/useGetProduct.js';

const API = "https://api.escuelajs.co/api/v1/products";

export const HomeProducts = () => {
    const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => <ProductItem product = {product} key = {product.id}/>)}
      </div>
  </section>
  )
}
