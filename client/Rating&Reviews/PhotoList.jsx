import React from 'react';

const PhotoList = ({photos}) => (
  <div>
    {photos.map(photo => <img key={photo.id} className='photo' src={photo.url} alt='product' />)}
  </div>
)

export default PhotoList;