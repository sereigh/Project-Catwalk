import React from 'react';
import PropTypes from 'prop-types';

import generateDescription from './generateDescription';

class CharacteristicRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'None Selected'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, characteristic) {
    const {handleCharacteristicRate} = this.props;

    handleCharacteristicRate(event, characteristic);

    this.setState({
      description: generateDescription(characteristic, parseInt(event.target.value, 10))
    })
  }

  render() {
    const {characteristic} = this.props;
    const {description} = this.state;

    return (
      <div>
        <div className='description'>
          {description}
        </div>
        <div className='flex-row'>
          {characteristic}
          <div className='flex-column'>
            <input type='radio' name={`${characteristic}-rating`} value='1' onChange={event => this.handleChange(event, characteristic)} />
            <span>{generateDescription(characteristic, 1)}</span>
          </div>
          <input type='radio' name={`${characteristic}-rating`} value='2' onChange={event => this.handleChange(event, characteristic)} />
          <input type='radio' name={`${characteristic}-rating`} value='3' onChange={event => this.handleChange(event, characteristic)} />
          <input type='radio' name={`${characteristic}-rating`} value='4' onChange={event => this.handleChange(event, characteristic)} />
          <div className='flex-column'>
            <input type='radio' name={`${characteristic}-rating`} value='5' onChange={event => this.handleChange(event, characteristic)} />
            <span>{generateDescription(characteristic, 5)}</span>
          </div>
        </div>
      </div>
    )
  }
}

CharacteristicRate.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleCharacteristicRate: PropTypes.func.isRequired
}

export default CharacteristicRate;