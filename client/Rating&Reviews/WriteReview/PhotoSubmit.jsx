import React from 'react';
import PropTypes from 'prop-types';

const PhotoSubmit = ({handlePhotoChange, numPhotos}) => (
  <span>
    <span>{numPhotos < 5 ? 'Upload your photos: ' : 'Photo limit reached '}</span>
    <input
      className='photo-upload'
      type='file'
      accept='image/png, image/jpeg'
      onChange={handlePhotoChange}
      disabled={numPhotos >= 5}
    />
  </span>
)

PhotoSubmit.propTypes = {
  handlePhotoChange: PropTypes.func.isRequired,
  numPhotos: PropTypes.number.isRequired
}

export default PhotoSubmit;