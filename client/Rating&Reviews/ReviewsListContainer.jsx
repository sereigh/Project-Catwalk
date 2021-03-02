import React from 'react';

import ReviewsList from './ReviewsList.jsx';

class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'relevance'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {handleSort} = this.props;

    handleSort(event.target.value);

    this.setState({
      selected: event.target.value
    });
  }

  render() {
    const {reviews, totalReviews} = this.props;
    const {selected} = this.state;

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
        <ReviewsList reviews={reviews} />
        <button type='button'>More Reviews</button>
        <button type='button'>Add A Review +</button>
      </>
    )
  }
}

export default ReviewsListContainer;