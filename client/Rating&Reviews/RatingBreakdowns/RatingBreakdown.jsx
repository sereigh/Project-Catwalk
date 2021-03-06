import React from 'react';
import PropTypes from 'prop-types';

const RatingBreakdown = ({ratings}) => (
  <div>Hello, world!</div>
)

RatingBreakdown.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string
  }).isRequired
}
export default RatingBreakdown;