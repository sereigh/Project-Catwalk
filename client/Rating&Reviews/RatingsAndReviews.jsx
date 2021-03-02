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

    this.retrieveReviewsAndData = this.retrieveReviewsAndData.bind(this);
    this.retrieveAllReviews = this.retrieveAllReviews.bind(this);
  }

  componentDidMount() {
    const {productId} = this.props;
    this.retrieveReviewsAndData(productId);
  }

  retrieveReviewsAndData(id) {
    axios
      .get(`/reviewdata/${id}`)
      .then((response) => {
        const totalReviews = parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10);
        this.setState({
          reviewData: response.data,
          totalReviews
        });
        this.retrieveAllReviews(id, totalReviews);
      })
      .catch((error) => {
        console.log('Get review data failed...', error);
      })
  }

  retrieveAllReviews(id, totalReviews) {
    axios
      .get(`/reviews/${id}/${totalReviews}`)
      .then((response) => {
        this.setState({
          reviews: response.data.results
        });
      })
      .catch((error) => {
        console.log('Get all reviews failed...', error);
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