import React from 'react';

import ReviewsListContainer from './ReviewsListContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      // <RatingsContainer />
      <ReviewsListContainer />
    )
  }
}

export default RatingsAndReviews;