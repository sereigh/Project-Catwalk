import React from 'react';
import PropTypes from 'prop-types';

import RatingSubmit from './RatingSubmit.jsx';
import RecommendSubmit from './RecommendSubmit.jsx';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      overallRating: 0,
      recommend: null
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
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

  handleRate(rating) {
    this.setState({
      overallRating: rating
    })
  }

  handleRecommend(event) {
    this.setState({
      recommend: event.target.value
    })
  }

  render() {
    const {characteristics} = this.props;
    const {showModal, overallRating} = this.state;

    return (
      <>
        <button type='button' onClick={this.handleModal}>Add A Review +</button>
        {
          showModal && (
            <>
              <form className='modal submit-form'>
                <h1>Write Your Review</h1>
                <h3>About the [PRODUCT NAME HERE]</h3>
                <RatingSubmit handleRate={this.handleRate} overallRating={overallRating} />
                <RecommendSubmit handleRecommend={this.handleRecommend} />
                <span>
                  {'*Characteristics: '}

                </span>
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

WriteReview.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.string)
}

WriteReview.defaultProps = {
  characteristics: []
}

export default WriteReview;