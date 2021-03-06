import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingsContainer from './RatingsContainer.jsx';
import ReviewsListContainer from './ReviewsListContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: {
        product_id: '1',
        ratings: {
          1: '0',
          2: '0',
          3: '0',
          4: '0',
          5: '0'
        },
        recommended: {
          false: '0',
          true: '0'
        },
        characteristics: {}
      },
      reviews: [],
      filters: [],
      totalReviews: 1,
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(rating) {
    const {filters} = this.state;
    const newFilters = [...filters];

    if (rating === 0) {
      this.setState({
        filters: []
      });
    } else if (!newFilters.includes(rating)) {
      newFilters.push(rating);
      this.setState({
        filters: newFilters
      });
    } else {
      newFilters.splice(newFilters.indexOf(rating), 1);
      this.setState({
        filters: newFilters
      });
    }
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
    const {reviewData, reviews, totalReviews, filters} = this.state;

    return (
      <div className='ratings-and-reviews-container'>
        <RatingsContainer
          reviewData={reviewData}
          totalReviews={totalReviews}
          handleFilter={this.handleFilter}
          filters={filters}
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