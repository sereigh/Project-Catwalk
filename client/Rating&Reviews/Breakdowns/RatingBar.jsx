import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({percent}) => {
  const containerStyle = {
    'width': '75%',
    'height': '10px',
    'transform': 'translate(5px, 50%)',
    'backgroundColor': 'gray'
  }

  const filledStyle = {
    'zIndex': '1',
    'width': `${percent || 0}%`,
    'height': '10px',
    'backgroundColor': 'green'
  }

  return (
    <div style={containerStyle}>
      <div style={filledStyle} />
    </div>
  )
}

RatingBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default RatingBar;