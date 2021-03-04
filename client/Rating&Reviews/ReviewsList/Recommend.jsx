import React from 'react';
import PropTypes from 'prop-types';

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

Recommend.propTypes = {
  recommend: PropTypes.bool.isRequired
}

export default Recommend;