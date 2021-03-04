import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicRate = ({characteristic, handleCharacteristicRate}) => (
  <span>
    {characteristic}
  </span>
)

CharacteristicRate.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleCharacteristicRate: PropTypes.func.isRequired
}

export default CharacteristicRate;