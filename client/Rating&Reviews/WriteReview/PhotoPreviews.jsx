import React from 'react';
import PropTypes from 'prop-types';

const PhotoPreviews = ({photos}) => (
  <span className='photo-previews'>
    {photos.map(photo => <img key={photo} className='photo' src={photo} alt='preview' />)}
  </span>
)

PhotoPreviews.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string)
}

PhotoPreviews.defaultProps = {
  photos: []
}

export default PhotoPreviews;