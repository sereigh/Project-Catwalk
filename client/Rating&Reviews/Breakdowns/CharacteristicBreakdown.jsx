import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicBreakdown = ({characteristics}) => (
  <div>{characteristics.Comfort ? 'Hello, world!' : 'Loading...'}</div>
)

CharacteristicBreakdown.propTypes = {
  characteristics: PropTypes.shape({
    Comfort: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
    Fit: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
    Length: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
    Quality: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
    Size: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
    Width: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }),
  })
}

CharacteristicBreakdown.defaultProps = {
  characteristics: {}
}

export default CharacteristicBreakdown;