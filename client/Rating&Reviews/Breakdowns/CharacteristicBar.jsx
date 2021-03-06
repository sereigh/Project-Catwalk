import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicBar = ({value}) => {
  return (<div>{value}</div>)
}

CharacteristicBar.propTypes = {
  value: PropTypes.string.isRequired
}

export default CharacteristicBar;