import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';

const RelatedProductList = ({productCards}) => (
  <div>
    RelatedProductList
    <ProductCard productCards={productCards} />
  </div>
);

RelatedProductList.propTypes = {
  productCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    starRating: PropTypes.string
  }))
}

RelatedProductList.defaultProps = {
  productCards: []
}

export default RelatedProductList;