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

    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleChange(event) {
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
    const {productId, reviews, totalReviews, characteristics} = this.props;
    const {selected, minimized} = this.state;

    return (
      <>
        <span>
          {`${totalReviews} reviews, sorted by:`}
          <select defaultValue={selected} onBlur={this.handleChange}>
            <option value='relevant'>relevance</option>
            <option value='helpful'>helpfulness</option>
            <option value='newest'>newest</option>
          </select>
        </span>
        <ReviewsList minimized={minimized} reviews={reviews} />
        <button type='button' onClick={this.handleView}>{minimized ? 'More Reviews' : 'Fewer Reviews'}</button>
        <WriteReview characteristics={characteristics} productId={productId} />
      </>
    )
  }
}

ReviewsListContainer.propTypes = {
  productId: PropTypes.number.isRequired,
  handleSort: PropTypes.func.isRequired,
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