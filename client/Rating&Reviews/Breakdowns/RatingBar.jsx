import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({percent}) => {
  const containerStyle = {
    'position': 'relative',
    'top': '-50%'
  }

  const filledStyle = {
    'zIndex': '1',
    'position': 'absolute',
    'left': '0',
    'transform': 'translate(10px, 50%)',
    'width': `${percent}px`,
    'height': '10px',
    'backgroundColor': 'green'
  }

  const emptyStyle = {
    'position': 'absolute',
    'left': '0',
    'transform': 'translate(10px, 50%)',
    'width': '100px',
    'height': '10px',
    'backgroundColor': 'gray'
  }

  return (
    <div style={containerStyle}>
      <div style={filledStyle} />
      <div style={emptyStyle} />
    </div>
  )
}

RatingBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default RatingBar;