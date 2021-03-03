import React from 'react';
import PropTypes from 'prop-types';

const PreviewImages = ({styles}) => (
  <div>
    <img src={styles[0].photos[0].url} alt='product' />
  </div>
);

PreviewImages.propTypes = {
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
  }))
}

PreviewImages.defaultProps = {
  styles: []
}

export default PreviewImages;