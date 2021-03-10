import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({percent}) => {
  const containerStyle = {
    'position': 'relative',
    'width': '75%',
    'height': '10px',
    'transform': 'translate(5px, 25%)',
    'backgroundColor': 'lightGray'
  }

  const filledStyle = {
    'width': `${percent || 0}%`,
    'height': '10px',
    'backgroundColor': 'lightGreen',
    'outline': '1px solid green',
    'outlineOffset': '-1px'
  }

  const hoverStyle = {
    'width': `${percent ? 100 - percent : 0}%`
  }

  return (
    <div style={containerStyle}>
      <div style={filledStyle} />
      <div style={hoverStyle} className='filter-hover' />
    </div>
  )
}

RatingBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default RatingBar;