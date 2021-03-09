import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList/ReviewsList.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';

class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'relevance',
      minimized: true
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleDropdownChange(event) {
    const {handleSort} = this.props;

    handleSort(event.target.value);

    this.setState({
      selected: event.target.value
    });
  }

  handleView() {
    const {minimized} = this.state;

    this.setState({
      minimized: !minimized
    })
  }

  render() {
    const {productId, productName, reviews, totalReviews, characteristics, handleSort, handleSearch} = this.props;
    const {selected, minimized} = this.state;

    return (
      <div className='reviews-container'>
        <h3>
          {`${totalReviews || 0} reviews, sorted by `}
          <select className='review-dropdown' defaultValue={selected} onBlur={this.handleDropdownChange}>
            <option value='relevant'>relevance</option>
            <option value='helpful'>helpfulness</option>
            <option value='newest'>newest</option>
          </select>
        </h3>
        <input type='text' placeholder='Search Reviews...' onChange={handleSearch} />
        <br />
        <br />
        <ReviewsList minimized={minimized} reviews={reviews} />
        <div className='review-buttons'>
          {totalReviews >= 3 &&
            <button type='button' onClick={this.handleView}>{minimized ? 'MORE REVIEWS' : 'FEWER REVIEWS'}</button>}
          <WriteReview characteristics={characteristics} productId={productId} productName={productName} handleSort={handleSort} selected={selected} />
        </div>
      </div>
    )
  }
}

ReviewsListContainer.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  totalReviews: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string
    }))
  })),
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
  })
}

ReviewsListContainer.defaultProps = {
  reviews: [],
  characteristics: {}
}

export default ReviewsListContainer;