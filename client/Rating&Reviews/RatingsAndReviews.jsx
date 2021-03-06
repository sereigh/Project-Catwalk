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
      filters: [],
      reviews: [],
      filteredReviews: [],
      searchTerm: '',
      searchedReviews: [],
      totalReviews: 1,
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
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

  handleSearch(event) {
    const {filteredReviews} = this.state;
    const searchTerm = event.target.value;
    const searchedReviews = [];
    const regex = new RegExp(searchTerm);

    if (searchTerm.length >= 3) {
      for (let i = 0; i < filteredReviews.length; i++) {
        if (filteredReviews[i].summary && filteredReviews[i].summary.includes(searchTerm)) {
          searchedReviews.push(filteredReviews[i]);
        } else if (filteredReviews[i].body.includes(searchTerm)) {
          searchedReviews.push(filteredReviews[i]);
        }
      }

      this.setState({
        searchTerm,
        searchedReviews
      });
    } else {
      this.setState({
        searchTerm,
        searchedReviews: []
      })
    }
  }

  handleFilter(rating) {
    const {filters, reviews} = this.state;
    const newFilters = [...filters];

    if (rating === 0) {
      this.setState({
        filters: []
      }, () => {
        this.setState({
          filteredReviews: this.filterReviews(reviews)
        });
      });
    } else if (!newFilters.includes(rating)) {
      newFilters.push(rating);
      this.setState({
        filters: newFilters
      }, () => {
        this.setState({
          filteredReviews: this.filterReviews(reviews)
        });
      });
    } else {
      newFilters.splice(newFilters.indexOf(rating), 1);
      this.setState({
        filters: newFilters
      }, () => {
        this.setState({
          filteredReviews: this.filterReviews(reviews)
        });
      });
    }
  }

  filterReviews(reviews) {
    const {filters} = this.state;
    const filteredReviews = [];

    if (filters.length === 0 || filters.length === 5) {
      return reviews;
    }

    for (let i = 0; i < reviews.length; i++) {
      if (filters.includes(reviews[i].rating)) {
        filteredReviews.push(reviews[i]);
      }
    }

    return filteredReviews;
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
        const filteredReviews = this.filterReviews(response.data.results);
        this.setState({
          reviews: response.data.results,
          filteredReviews
        });
      })
      .catch((error) => {
        console.log('Get all reviews failed...', error);
      })
  }

  render() {
    const {productId, productName} = this.props;
    const {reviewData, filteredReviews, searchTerm, searchedReviews, totalReviews, filters} = this.state;

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
          reviews={searchTerm.length < 3 ? filteredReviews : searchedReviews}
          totalReviews={totalReviews}
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
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