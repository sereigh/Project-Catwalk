import React from 'react';

import ReviewsList from './ReviewsList.jsx';

class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'relevance'
    };
  }

  render() {
    const {reviews, totalReviews} = this.props;
    const {selected} = this.state;

    return (
      <>
        <span>
          {`${totalReviews} reviews, sorted by:`}
          <select defaultValue={selected}>
            <option value='relevance'>relevance</option>
            <option value='helpfulness'>helpfulness</option>
            <option value='newest'>newest</option>
          </select>
        </span>
        <ReviewsList reviews={reviews} />
        <button type='button'>More Reviews</button>
        <button type='button'>Add A Review +</button>
      </>
    )
  }
}

export default ReviewsListContainer;