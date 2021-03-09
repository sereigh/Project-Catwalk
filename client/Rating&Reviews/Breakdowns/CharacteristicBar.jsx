import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicBar = ({value}) => {
  const containerStyle = {
    'width': '100%',
    'margin': 'auto',
    'height': '7px',
    'backgroundImage': 'linear-gradient(to right, white 0% 1%, gray 1% 19%, white 19% 21%, gray 21% 39%, white 39% 41%, gray 41% 59%, white 59% 61%, gray 61% 79%, white 79% 81%, gray 81% 99%, white 99% 100%)'
  }

  const pointerStyle = {
    'zIndex': '1',
    'marginLeft': `${parseInt(value, 10) / 5 * 100}%`,
    'transform': 'translate(-8px, -3px)'
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