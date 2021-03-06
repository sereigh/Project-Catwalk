import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingsContainer from './RatingsContainer.jsx';
import ReviewsListContainer from './ReviewsListContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: {},
      reviews: [],
      totalReviews: 0,
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
    this.retrieveReviewsAndData = this.retrieveReviewsAndData.bind(this);
    this.retrieveAllReviews = this.retrieveAllReviews.bind(this);
  }

  componentDidMount() {
    const {productId} = this.props;
    const {sort} = this.state;
    this.retrieveReviewsAndData(productId, sort);
  }

  handleSort(sort) {
    const {productId} = this.props;
    const {totalReviews} = this.state;

    this.retrieveAllReviews(productId, sort, totalReviews);
  }

  retrieveReviewsAndData(id, sort) {
    axios
      .get(`/reviewdata/${id}`)
      .then((response) => {
        const totalReviews = parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10);
        this.setState({
          reviewData: response.data,
          totalReviews
        });
        this.retrieveAllReviews(id, sort, totalReviews);
      })
      .catch((error) => {
        console.log('Get review data failed...', error);
      })
  }

  retrieveAllReviews(id, sort, totalReviews) {
    axios
      .get(`/reviews/${id}/${sort}/${totalReviews}`)
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
    const {productId, productName} = this.props;
    const {reviewData, reviews, totalReviews} = this.state;

    return (
      <div className='ratings-and-reviews-container'>
        <RatingsContainer
          reviewData={reviewData}
          totalReviews={totalReviews}
        />
        <ReviewsListContainer
          productId={productId}
          productName={productName}
          reviews={reviews}
          totalReviews={totalReviews}
          handleSort={this.handleSort}
          characteristics={reviewData.characteristics || {}}
        />
      </div>
    )
  }
}

RatingsAndReviews.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired
}

export default RatingsAndReviews;