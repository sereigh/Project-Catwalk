import React from 'react';

const PreviewImages = ({styles}) => (
  <div>
    <img src={styles[0].photos[0].url} alt='product' />
  </div>
);

export default PreviewImages;