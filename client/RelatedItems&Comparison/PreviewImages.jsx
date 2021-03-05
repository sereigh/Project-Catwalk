import React from 'react';
import PropTypes from 'prop-types';

const PreviewImages = ({currentStyle}) => (
  <div>
    <img src={currentStyle[0].photos[0].url} alt='product' style={{width: '150px', height: '200px'}} />
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
  })).isRequired
}

export default PreviewImages;