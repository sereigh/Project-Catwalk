import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      overallRating: 0
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleRate = this.handleRate.bind(this);
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

  render() {
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
                <span>
                  *Overall Rating:
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={() => this.handleRate(1)}
                    onKeyPress={() => this.handleRate(1)}
                  >
                    {overallRating < 1 ? '☆' : '★'}
                  </span>
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={() => this.handleRate(2)}
                    onKeyPress={() => this.handleRate(2)}
                  >
                    {overallRating < 2 ? '☆' : '★'}
                  </span>
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={() => this.handleRate(3)}
                    onKeyPress={() => this.handleRate(3)}
                  >
                    {overallRating < 3 ? '☆' : '★'}
                  </span>
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={() => this.handleRate(4)}
                    onKeyPress={() => this.handleRate(4)}
                  >
                    {overallRating < 4 ? '☆' : '★'}
                  </span>
                  <span
                    role='button'
                    tabIndex={0}
                    onClick={() => this.handleRate(5)}
                    onKeyPress={() => this.handleRate(5)}
                  >
                    {overallRating < 5 ? '☆ ' : '★ '}
                  </span>
                  <span>
                    {
                      overallRating === 1 ? 'Poor'
                      : overallRating === 2 ? 'Fair'
                      : overallRating === 3 ? 'Average'
                      : overallRating === 4 ? 'Good'
                      : overallRating === 5 ? 'Great'
                      : ''
                    }
                  </span>
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

export default WriteReview;