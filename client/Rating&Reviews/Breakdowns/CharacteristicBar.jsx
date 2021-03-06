import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicBar = ({value}) => {
  const containerStyle = {
    'width': '100%',
    'margin': 'auto',
    'height': '7px',
    'backgroundColor': 'gray'
  }

  const pointerStyle = {
    'zIndex': '1',
    'marginLeft': `${parseInt(value, 10) / 5 * 100}%`,
    'transform': 'translateY(-3px)'
  }

  return (
    <div style={containerStyle}>
      <div style={pointerStyle}>▼</div>
    </div>
  )
}

CharacteristicBar.propTypes = {
  value: PropTypes.string.isRequired
}

export default CharacteristicBar;