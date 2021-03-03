import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo.jsx';

const PhotoList = ({photos}) => (
  <div>
    {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
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