import React from 'react';
import PropTypes from 'prop-types';

const PreviewImages = ({currentStyle, selectAnotherProduct, productId}) => (
  <div>
    <img
      src={currentStyle[0].photos[0].url}
      alt='product'
      style={{width: '150px', height: '200px'}}
      onClick={(e) => {
        console.log('clicked!');
        selectAnotherProduct(productId);
      }}
    />
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
  currentStyle: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    default: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string
    }))
  })).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired
}

export default PreviewImages;