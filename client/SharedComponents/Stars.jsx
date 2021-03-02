import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({rating}) => {
  const percent = rating / 5 * 100;

  const starStyle = {
    'background': `-webkit-linear-gradient(0deg, black ${percent}%, transparent ${percent}% 100%)`,
    'backgroundClip': 'text',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  }

  const emptyStarStyle = {
    'position': 'absolute',
    'top': '0',
    'left': '0',
  }

  return (
    <>
      <span style={starStyle}>★★★★★</span>
      <span style={emptyStarStyle}>☆☆☆☆☆</span>
    </>
  )
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired
}

export default Stars;