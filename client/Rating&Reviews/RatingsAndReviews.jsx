import React from 'react';
import axios from 'axios';

import ReviewsListContainer from './ReviewsListContainer.jsx';
import dummyReviews from './dummyReviews';


class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: {},
      reviews: [],
      totalReviews: 0
    }
  }

  componentDidMount() {

  }

  retrieveReviewData() {
    axios
      .get(`/reviewdata`)
      .then((response) => {
        const totalReviews = response.data.recommended.false + response.data.recommended.true;
        this.setState({
          reviewData: response.data,
          totalReviews
        });
      })
      .catch((error) => {
        console.log('Get review data failed...', error);
      })
  }

  render() {
    const {reviews, totalReviews} = this.state;

    return (
      <>
        {/* <RatingsContainer /> */}
        <ReviewsListContainer reviews={reviews} totalReviews={totalReviews} />
      </>
    )
  }
}

export default RatingsAndReviews;