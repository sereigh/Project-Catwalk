import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicRate = ({characteristic, handleCharacteristicRate}) => (
  <div>
    {characteristic}
    <input type='radio' name={`${characteristic}-rating`} value='1' onChange={event => handleCharacteristicRate(event, characteristic)} />
    <input type='radio' name={`${characteristic}-rating`} value='2' onChange={event => handleCharacteristicRate(event, characteristic)} />
    <input type='radio' name={`${characteristic}-rating`} value='3' onChange={event => handleCharacteristicRate(event, characteristic)} />
    <input type='radio' name={`${characteristic}-rating`} value='4' onChange={event => handleCharacteristicRate(event, characteristic)} />
    <input type='radio' name={`${characteristic}-rating`} value='5' onChange={event => handleCharacteristicRate(event, characteristic)} />
  </div>
)

CharacteristicRate.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleCharacteristicRate: PropTypes.func.isRequired
}

export default CharacteristicRate;