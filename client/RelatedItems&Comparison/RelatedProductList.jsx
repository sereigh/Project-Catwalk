import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProductList = ({productCards}) => (
  <div>
    RelatedProductList
    <ProductCard productCards={productCards}/>
  </div>
);

export default RelatedProductList;