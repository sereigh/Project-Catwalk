import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const ProductCard = ({productCard}) => (
  <div>
    <div className="productCard" style={{border: 'solid black 1px'}}>
      <ActionButton />
      <PreviewImages styles={productCard.styles} />
      <div>
        <div>{productCard.category}</div>
        <div>{productCard.name}</div>
        <div>{`$${productCard.price}`}</div>
        <div>{productCard.starRating}</div>
      </div>
    </div>
    <ComparisonModal />
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