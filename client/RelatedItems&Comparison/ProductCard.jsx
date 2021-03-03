import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({productCards}) => (
  <div>
    {productCards.map(card => (
      <div key={card.id}>
        {card.category}
        {card.name}
        {card.price}
        {card.starRating}
      </div>
    ))}
  </div>
);

ProductCard.propTypes = {
  productCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    starRating: PropTypes.string
  }))
}

ProductCard.defaultProps = {
  productCards: []
}

export default ProductCard;