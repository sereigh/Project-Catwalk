import React from 'react';
import PropTypes from 'prop-types';

import RatingSubmit from './RatingSubmit.jsx';
import RecommendSubmit from './RecommendSubmit.jsx';
import CharacteristicsSubmit from './CharacteristicsSubmit.jsx';
import SummarySubmit from './SummarySubmit.jsx';
import BodySubmit from './BodySubmit.jsx';
import NicknameSubmit from './NicknameSubmit.jsx';
import EmailSubmit from './EmailSubmit.jsx';

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
      body: '',
      nickname: '',
      email: '',
      ratingError: false,
      recommendError: false,
      characteristicsError: false,
      bodyError: false,
      nicknameError: false,
      emailError: false,
      errors: false
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleCharacteristicRate = this.handleCharacteristicRate.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      body: '',
      nickname: '',
      email: '',
      ratingError: false,
      recommendError: false,
      characteristicsError: false,
      bodyError: false,
      nicknameError: false,
      emailError: false,
      errors: false
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

  handleNicknameChange(event) {
    this.setState({
      nickname: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {characteristics} = this.props;
    const {overallRating, recommend, size, width, comfort, quality, length, fit} = this.state;

    let errors = false;
    this.setState({
      errors: false
    });

    for (let i = 0; i < characteristics.length; i++) {
      if ((characteristics[i] === 'Size' && !size)
        || (characteristics[i] === 'Width' && !width)
        || (characteristics[i] === 'Comfort' && !comfort)
        || (characteristics[i] === 'Quality' && !quality)
        || (characteristics[i] === 'Length' && !length)
        || (characteristics[i] === 'Fit' && !fit)) {
          errors = true;
          this.setState({
            characteristicsError: true,
            errors: true
          });
      }
    }

    if (!errors) {
      this.setState({
        characteristicsError: false
      });
    }

    if (overallRating !== 1 && overallRating !== 2 && overallRating !== 3 && overallRating !== 4 && overallRating !== 5) {
      errors = true;
      this.setState({
        ratingError: true,
        errors: true
      });
    } else {
      this.setState({
        ratingError: false
      });
    }

    if (!recommend) {
      errors = true;
      this.setState({
        recommendError: true,
        errors: true
      });
    } else {
      this.setState({
        recommendError: false,
      });
    }

    if (!errors) {
      console.log('No errors!');
    }
  }

  render() {
    const {characteristics} = this.props;
    const {showModal, overallRating, body, ratingError, recommendError, characteristicsError, bodyError, nicknameError, emailError, errors} = this.state;

    const charactersLeftMessage = 50 - body.length > 0 ?
      `Minimum required characters left: ${50 - body.length}` : 'Minimum reached';

    return (
      <>
        <button type='button' onClick={this.handleModal}>Add A Review +</button>
        {
          showModal && (
            <>
              <form className='modal submit-form' onSubmit={this.handleSubmit}>
                <h1>Write Your Review</h1>
                <h3>About the [PRODUCT NAME HERE]</h3>
                <h4 className={errors ? 'error-message' : 'no-error-message'}>You must enter the following:</h4>
                <div className='submission-components'>
                  <div className='left'>
                    <RatingSubmit handleRate={this.handleRate} overallRating={overallRating} ratingError={ratingError} />
                    <br />
                    <br />
                    <RecommendSubmit handleRecommend={this.handleRecommend} recommendError={recommendError} />
                    <br />
                    <br />
                    <CharacteristicsSubmit characteristics={characteristics} handleCharacteristicRate={this.handleCharacteristicRate} characteristicsError={characteristicsError} />
                  </div>
                  <div className='right'>
                    <SummarySubmit handleSummaryChange={this.handleSummaryChange} />
                    <br />
                    <br />
                    <BodySubmit handleBodyChange={this.handleBodyChange} charactersLeftMessage={charactersLeftMessage} bodyError={bodyError} />
                    <br />
                    <br />
                    {/* Photos compononet */}
                    <br />
                    <br />
                    <div className='final-submission-details'>
                      <div className='user-details'>
                        <NicknameSubmit handleNicknameChange={this.handleNicknameChange} nicknameError={nicknameError} />
                        <EmailSubmit handleEmailChange={this.handleEmailChange} emailError={emailError} />
                      </div>
                      <button type='submit' className='submit-review'>Submit</button>
                    </div>
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