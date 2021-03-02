import React from 'react';

const ProductCard = ({productCards}) => (
  <div>
    {productCards.map(card => (<div>
      {card.category}, {card.name}, {card.price}, {card.starRating}
    </div>)
    )}
    </div>
);


export default ProductCard;