import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList.jsx';

class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'relevance',
      minimized: true,
      showModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleModal = this.handleModal.bind(this);
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

  handleModal() {
    const {showModal} = this.state;

    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    this.setState({
      showModal: !showModal
    })
  }

  render() {
    const {reviews, totalReviews} = this.props;
    const {selected, minimized, showModal} = this.state;

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
        <button type='button' onClick={this.handleModal}>Add A Review +</button>
        {
          showModal && (
            <>
              <form className='modal submit-form'>
                <input type='text' />
              </form>
              <div
                role='button'
                tabIndex={0}
                className='overlay'
                onClick={this.handleModal}
                onKeyPress={this.handleModal}
              />
            </>
          )
        }
      </>
    )
  }
}

ReviewsListContainer.propTypes = {
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
  }))
}

ReviewsListContainer.defaultProps = {
  reviews: []
}

export default ReviewsListContainer;