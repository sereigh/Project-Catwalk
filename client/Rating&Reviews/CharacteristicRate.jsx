import React from 'react';
import PropTypes from 'prop-types';

import generateDescription from './generateDescription';

class CharacteristicRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'None Selected'
    }
  }

  render() {
    const {characteristic, handleCharacteristicRate} = this.props;
    const {description} = this.state;

    return (
      <div>
        <div className='description'>
          {description}
        </div>
        {characteristic}
        <input type='radio' name={`${characteristic}-rating`} value='1' onChange={event => handleCharacteristicRate(event, characteristic)} />
        <input type='radio' name={`${characteristic}-rating`} value='2' onChange={event => handleCharacteristicRate(event, characteristic)} />
        <input type='radio' name={`${characteristic}-rating`} value='3' onChange={event => handleCharacteristicRate(event, characteristic)} />
        <input type='radio' name={`${characteristic}-rating`} value='4' onChange={event => handleCharacteristicRate(event, characteristic)} />
        <input type='radio' name={`${characteristic}-rating`} value='5' onChange={event => handleCharacteristicRate(event, characteristic)} />
      </div>
    )
  }
}

CharacteristicRate.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleCharacteristicRate: PropTypes.func.isRequired
}

export default CharacteristicRate;