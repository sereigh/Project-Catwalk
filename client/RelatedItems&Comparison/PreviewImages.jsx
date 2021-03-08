import React from 'react';
import PropTypes from 'prop-types';

const PreviewImages = ({currentStyle, selectAnotherProduct, productId}) => (
  <div
    className="preview-image"
    tabIndex="0"
    role="button"
    onClick={() => ( selectAnotherProduct(productId) )}
    onKeyPress={() => ( selectAnotherProduct(productId) )}
  >
    {currentStyle.photos[0].url &&
    (
      <img
        src={currentStyle.photos[0].url}
        alt='product'
      />
    )}
  </div>
);

PreviewImages.propTypes = {
  // styles: PropTypes.arrayOf(PropTypes.shape({
  //   style_id: PropTypes.number,
  //   name: PropTypes.string,
  //   original_price: PropTypes.string,
  //   sale_price: PropTypes.string,
  //   default: PropTypes.bool,
  //   photos: PropTypes.arrayOf(PropTypes.shape({
  //     thumbnail_url: PropTypes.string,
  //     url: PropTypes.string
  //   }))
  // })).isRequired,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    default: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired
}

export default PreviewImages;
