import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar.jsx';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const {filtered} = this.state;

    this.setState({
      filtered: !filtered
    })
  }

  render() {
    const {rating, ratingTotal, percent, handleFilter} = this.props;

    return (
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(rating)}
        onKeyPress={() => handleFilter(rating)}
      >
        <span>{`${rating} stars`}</span>
        <RatingBar percent={percent} />
        <span className='review-total'>{ratingTotal}</span>
      </div>
    )
  }
}

Filter.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingTotal: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired
}

export default Filter;