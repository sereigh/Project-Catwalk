import React from 'react';
import PropTypes from 'prop-types';

import CharacteristicRate from './CharacteristicRate.jsx';

const CharacteristicsSubmit = ({characteristics, values, handleCharacteristicRate, characteristicsError}) => (
  <>
    <div className={characteristicsError ? 'error' : null}>
      {'*Characteristics: '}
    </div>
    {characteristics.map(characteristic => (
      <CharacteristicRate key={characteristic} characteristic={characteristic} value={values[characteristic.toLowerCase()]} handleCharacteristicRate={handleCharacteristicRate} />
    ))}
  </>
)

CharacteristicsSubmit.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.string),
  handleCharacteristicRate: PropTypes.func.isRequired,
  characteristicsError: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    size: PropTypes.number,
    width: PropTypes.number,
    comfort: PropTypes.number,
    quality: PropTypes.number,
    length: PropTypes.number,
    fit: PropTypes.number
  })
}

CharacteristicsSubmit.defaultProps = {
  characteristics: [],
  values: {}
}

export default CharacteristicsSubmit;