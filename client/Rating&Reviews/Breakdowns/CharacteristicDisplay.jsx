import React from 'react';
import PropTypes from 'prop-types';

import CharacteristicBar from './CharacteristicBar.jsx';

const CharacteristicDisplay = ({characteristic, value}) => (
  <div>
    <div>{characteristic}</div>
    <CharacteristicBar value={value} />
    <div>
      <span>Description 1</span>
      <span>Description 2</span>
    </div>
  </div>
)

CharacteristicDisplay.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default CharacteristicDisplay;