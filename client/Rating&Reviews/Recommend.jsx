import React from 'react';

const Recommend = ({recommend}) => {
  if (recommend) {
    return (
      <div>
        <span>I recommend this product</span>
        <br />
        <br />
      </div>
    )
  }

  return null;
}

export default Recommend;