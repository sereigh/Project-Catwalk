import React from 'react';
import PropTypes from 'prop-types';

import RatingSubmit from './RatingSubmit.jsx';
import RecommendSubmit from './RecommendSubmit.jsx';
import CharacteristicsSubmit from './CharacteristicsSubmit.jsx';
import SummarySubmit from './SummarySubmit.jsx';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      overallRating: 0,
      recommend: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: ''
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleCharacteristicRate = this.handleCharacteristicRate.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleModal() {
    const {showModal} = this.state;

    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    this.setState({
      showModal: !showModal,
      overallRating: 0,
      recommend: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: ''
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

  handleCharacteristicRate(event, characteristic) {
    const rating = parseInt(event.target.value);

    if (characteristic === 'Size') {
      this.setState({
        size: rating
      });
    } else if (characteristic === 'Width') {
      this.setState({
        width: rating
      });
    } else if (characteristic === 'Comfort') {
      this.setState({
        comfort: rating
      });
    } else if (characteristic === 'Quality') {
      this.setState({
        quality: rating
      });
    } else if (characteristic === 'Length') {
      this.setState({
        length: rating
      });
    } else if (characteristic === 'Fit') {
      this.setState({
        fit: rating
      });
    }
  }

  handleSummaryChange(event) {
    this.setState({
      summary: event.target.value
    });
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    });
  }

  render() {
    const {characteristics} = this.props;
    const {showModal, overallRating, body} = this.state;

    let charactersLeftMessage = 50 - body.length > 0 ?
      `Minimum required characters left: ${50 - body.length}` : 'Minimum reached';

    return (
      <>
        <button type='button' onClick={this.handleModal}>Add A Review +</button>
        {
          showModal && (
            <>
              <form className='modal submit-form'>
                <h1>Write Your Review</h1>
                <h3>About the [PRODUCT NAME HERE]</h3>
                <div className='submission-components'>
                  <div className='left'>
                    <RatingSubmit handleRate={this.handleRate} overallRating={overallRating} />
                    <br />
                    <br />
                    <RecommendSubmit handleRecommend={this.handleRecommend} />
                    <br />
                    <br />
                    <CharacteristicsSubmit characteristics={characteristics} handleCharacteristicRate={this.handleCharacteristicRate} />
                  </div>
                  <div className='right'>
                    <SummarySubmit handleSummaryChange={this.handleSummaryChange} />
                    <br />
                    <br />
                    <span>
                      {'*Review Body: '}
                      <textarea
                        className='review-body'
                        placeholder='Why did you like the product or not?'
                        maxLength={1000}
                        onChange={this.handleBodyChange}
                      />
                      <span>{charactersLeftMessage}</span>
                    </span>
                  </div>
                </div>
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