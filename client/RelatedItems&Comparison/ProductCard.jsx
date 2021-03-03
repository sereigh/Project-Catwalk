import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';

const ProductCard = ({productCard}) => (
  <div>
    <ActionButton />
    <PreviewImages />
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
    starRating: PropTypes.string
  })
}

ProductCard.defaultProps = {
  productCard: []
}

export default ProductCard;