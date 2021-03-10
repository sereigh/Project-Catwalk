import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({rating}) => {
  const percent = rating / 5 * 100;

  const containerStyle = {
    'position': 'relative'
  }

  const starStyle = {
    'position': 'absolute',
    'left': '0',
    'fontSize': 'large',
    'backgroundImage': `-webkit-linear-gradient(0deg, lightGreen ${percent}%, transparent ${percent}% 100%)`,
    'backgroundClip': 'text',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  }

  const emptyStarStyle = {
    'zIndex': '1',
    'color': 'green',
    'position': 'absolute',
    'left': '0',
    'font-size': 'large'
  }

  return (
    <span style={containerStyle}>
      <span style={starStyle}>★★★★★</span>
      <span style={emptyStarStyle}>☆☆☆☆☆</span>
    </span>
  )
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired
}

export default Stars;