import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';

const RelatedProductList = ({productCards}) => (
  <div className="relatedProductList">
    {productCards.map(productCard => (
      <ProductCard key={productCard.id} productCard={productCard} />
    ))}
  </div>
);

RelatedProductList.propTypes = {
  productCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
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
  }))
}

RelatedProductList.defaultProps = {
  productCards: []
}

export default RelatedProductList;