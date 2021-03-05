import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingSubmit from './RatingSubmit.jsx';
import RecommendSubmit from './RecommendSubmit.jsx';
import CharacteristicsSubmit from './CharacteristicsSubmit.jsx';
import SummarySubmit from './SummarySubmit.jsx';
import BodySubmit from './BodySubmit.jsx';
import PhotoPreviews from './PhotoPreviews.jsx';
import PhotoSubmit from './PhotoSubmit.jsx';
import NicknameSubmit from './NicknameSubmit.jsx';
import EmailSubmit from './EmailSubmit.jsx';

const defaultState = {
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
  photos: [],
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

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(defaultState, {showModal: false, submitted: false});

    this.handleModal = this.handleModal.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleCharacteristicRate = this.handleCharacteristicRate.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
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

    this.setState(Object.assign(defaultState, {showModal: !showModal, submitted: false}));
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
    const rating = parseInt(event.target.value, 10);

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

  handlePhotoChange(event) {
    const {photos} = this.state;
    const newPhotos = photos.concat(Array.from(event.target.files));

    this.setState({
      photos: newPhotos
    })
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
    const {productId, characteristics, handleSort, selected} = this.props;
    const {overallRating, recommend, size, width, comfort, quality, length, fit, summary, body, nickname, email} = this.state;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    const characteristicNames = Object.keys(characteristics);

    let errors = false;
    this.setState({
      errors: false
    });

    for (let i = 0; i < characteristicNames.length; i++) {
      if ((characteristicNames[i] === 'Size' && !size)
        || (characteristicNames[i] === 'Width' && !width)
        || (characteristicNames[i] === 'Comfort' && !comfort)
        || (characteristicNames[i] === 'Quality' && !quality)
        || (characteristicNames[i] === 'Length' && !length)
        || (characteristicNames[i] === 'Fit' && !fit)) {
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

    if (body.length < 50) {
      errors = true;
      this.setState({
        bodyError: true,
        errors: true
      });
    } else {
      this.setState({
        bodyError: false,
      });
    }

    if (nickname.length <= 0) {
      errors = true;
      this.setState({
        nicknameError: true,
        errors: true
      });
    } else {
      this.setState({
        nicknameError: false,
      });
    }

    if (!email.match(emailRegex)) {
      errors = true;
      this.setState({
        emailError: true,
        errors: true
      });
    } else {
      this.setState({
        emailError: false,
      });
    }

    if (!errors) {
      const characteristicsInfo = {};

      for (const prop in characteristics) {
        if ({}.hasOwnProperty.call(characteristics, prop)) {
          characteristicsInfo[characteristics[prop].id] =
            prop === 'Size' ? size :
            prop === 'Width' ? width :
            prop === 'Comfort' ? comfort :
            prop === 'Quality' ? quality :
            prop === 'Length' ? length :
            prop === 'Fit' ? fit : 0
        }
      }

      // const bufferPromises = photos.map(photo => photo.arrayBuffer());

      // Promise.all(bufferPromises)
      //   .then(results => axios.post('/upload/photo', results)
      //     .then(urls => console.log(urls))
      //     .catch(error => console.log(error)))
      //   .catch(error => console.log(error));

      const submission = {
        product_id: productId,
        rating: overallRating,
        summary,
        body,
        recommend: recommend === 'yes',
        name: nickname,
        email,
        photos: [],
        characteristics: characteristicsInfo
      }

      axios
        .post('/reviews', submission)
        .then(results => {
          event.target.reset();
          this.setState(this.setState(Object.assign(defaultState, {submitted: true})));
          handleSort(selected);
          console.log(results)
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    const {characteristics, productName} = this.props;
    const {showModal, overallRating, photos, body, ratingError, recommendError, characteristicsError, bodyError, nicknameError, emailError, errors, submitted} = this.state;

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
                <h3>{`About the ${productName}`}</h3>
                <h4 className={errors ? 'error-message' : 'no-error-message'}>You must enter the following:</h4>
                <div className='submission-components'>
                  <div className='left'>
                    <RatingSubmit handleRate={this.handleRate} overallRating={overallRating} ratingError={ratingError} />
                    <br />
                    <br />
                    <RecommendSubmit handleRecommend={this.handleRecommend} recommendError={recommendError} />
                    <br />
                    <br />
                    <CharacteristicsSubmit characteristics={Object.keys(characteristics)} handleCharacteristicRate={this.handleCharacteristicRate} characteristicsError={characteristicsError} />
                  </div>
                  <div className='right'>
                    <SummarySubmit handleSummaryChange={this.handleSummaryChange} />
                    <br />
                    <br />
                    <BodySubmit handleBodyChange={this.handleBodyChange} charactersLeftMessage={charactersLeftMessage} bodyError={bodyError} />
                    <br />
                    <br />
                    <PhotoPreviews photos={photos.map(photo => URL.createObjectURL(photo))} />
                    <br />
                    <br />
                    <PhotoSubmit handlePhotoChange={this.handlePhotoChange} numPhotos={photos.length} />
                    <br />
                    <br />
                    <div className='final-submission-details'>
                      <div className='user-details'>
                        <NicknameSubmit handleNicknameChange={this.handleNicknameChange} nicknameError={nicknameError} />
                        <EmailSubmit handleEmailChange={this.handleEmailChange} emailError={emailError} />
                      </div>
                      <div className='submit-details'>
                        <button type='submit' className='submit-review'>Submit</button>
                        <h4 className={submitted ? 'success-message' : 'no-success-message'}>Success!</h4>
                      </div>
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
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
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
  handleSort: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

WriteReview.defaultProps = {
  characteristics: {}
}

export default WriteReview;