import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingsContainer from './RatingsContainer.jsx';
import ReviewsListContainer from './ReviewsListContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      reviews: [],
      filteredReviews: [],
      searchTerm: '',
      searchedReviews: [],
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.retrieveAllReviews = this.retrieveAllReviews.bind(this);
  }

  componentDidMount() {
    const {productId, totalReviews, retrieveReviewData} = this.props;
    const {sort} = this.state;

    retrieveReviewData(() => this.retrieveAllReviews(productId, sort, totalReviews));
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
    // const regex = new RegExp(searchTerm);

    if (searchTerm.length >= 3) {
      for (let i = 0; i < filteredReviews.length; i++) {
        if (filteredReviews[i].summary && filteredReviews[i].summary.includes(searchTerm)) {
          searchedReviews.push(filteredReviews[i]);
        } else if (filteredReviews[i].body.includes(searchTerm)) {
          searchedReviews.push(filteredReviews[i]);
        }
      }

      // const newReview = {};
      // newReview = Object.assign(newReview, filteredReviews[i]);

      // if (filteredReviews[i].summary && filteredReviews[i].summary.includes(searchTerm)) {
      //   found = true;
      //   const newSummary = filteredReviews[i].summary.split(regex);
      //   for (let j = 1; j < newSummary.length; j += 2) {
      //     newSummary[j] = <mark key={j}>{searchTerm}</mark>;
      //   }
      //   newReview.summary = <>{newSummary}</>
      // }

      // if (filteredReviews[i].body.includes(searchTerm)) {
      //   found = true;
      //   const newBody = filteredReviews[i].body.split(regex);
      //   for (let j = 1; j < newBody.length; j += 2) {
      //     newBody[j] = <mark key={j}>{searchTerm}</mark>;
      //   }
      //   newReview.body = <>{newBody}</>
      // }

      // if (found) {
      //   searchedReviews.push(newReview);
      // }

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
    const {productId, productName, reviewData, totalReviews} = this.props;
    const {filteredReviews, searchTerm, searchedReviews, filters} = this.state;

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
  productName: PropTypes.string.isRequired,
  reviewData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string
    }),
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
    }),
  }).isRequired,
  totalReviews: PropTypes.number.isRequired,
  retrieveReviewData: PropTypes.func.isRequired
}

export default RatingsAndReviews;