import React from 'react';

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

export default Stars;