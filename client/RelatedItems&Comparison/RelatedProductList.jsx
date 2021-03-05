import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.jsx';

const RelatedProductList = ({productCards, selectProductInfo}) => (
  <div className="relatedProductList">
    {productCards.map(productCard => (
      <ProductCard key={productCard.id} productCard={productCard} selectProductInfo={selectProductInfo} />
    ))}
  </div>
);

RelatedProductList.propTypes = {
  productCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    starRating: PropTypes.string,
    styles: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      default: PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string
      }))
    })),
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  })),
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired
}

RelatedProductList.defaultProps = {
  productCards: []
}

export default RelatedProductList;