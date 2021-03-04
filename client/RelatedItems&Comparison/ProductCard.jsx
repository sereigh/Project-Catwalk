import React from 'react';
import PropTypes from 'prop-types';

import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const ProductCard = ({productCard}) => {

  const [window, setWindow] = React.useState('none');

  const toggleModalWindow = () => {
    if (window === 'none') {
      setWindow('block');
    } else {
      setWindow('none');
    }
  };

  return (
    <div>
      <div className="productCard" style={{border: 'solid black 1px'}}>
        <ActionButton toggleModalWindow={toggleModalWindow} />
        <PreviewImages styles={productCard.styles} />
        <div>
          <div>{productCard.category}</div>
          <div>{productCard.name}</div>
          <div>{`$${productCard.price}`}</div>
          <div>{productCard.starRating}</div>
        </div>
      </div>
      <ComparisonModal features={productCard.features} window={window} toggleModalWindow={toggleModalWindow} />
    </div>
  );
};

ProductCard.propTypes = {
  productCard: PropTypes.shape({
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
  })
}

ProductCard.defaultProps = {
  productCard: {}
}

export default ProductCard;
