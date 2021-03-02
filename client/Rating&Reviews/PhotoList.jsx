import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = ({photos}) => (
  <div>
    {photos.map(photo => <img key={photo.id} className='photo' src={photo.url} alt='product' />)}
  </div>
)

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string
  }))
}

PhotoList.defaultProps = {
  photos: []
}

export default PhotoList;