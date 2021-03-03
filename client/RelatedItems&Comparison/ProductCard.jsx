import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';

const ProductCard = ({productCard}) => (
  <div>
    <ActionButton />
    <PreviewImages styles={productCard.styles} />
    {productCard.category}
    {productCard.name}
    {productCard.price}
    {productCard.starRating}
  </div>
);

ProductCard.propTypes = {
  productCard: PropTypes.shape({
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
  })
}

ProductCard.defaultProps = {
  productCard: {}
}

export default ProductCard;