import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
    const {photo, uploaded, handleRemove} = this.props;
    const {showModal} = this.state;

    return (
      <>
        <div
          role='button'
          tabIndex={0}
          className='photo-container'
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
        >
          <img className='photo' src={photo.url} alt='product' />
        </div>
        {
          showModal && (
            <>
              {!uploaded ?
                <img className='review-modal' src={photo.url} alt='product' /> :
                (
                  <div>
                    <img className='review-modal' src={photo.url} alt='preview' />
                    <button
                      className='review-modal remove-button'
                      type='button'
                      onClick={() => {handleRemove(photo.id); this.handleClick()}}
                    >
                      Remove Photo
                    </button>
                  </div>
                )}
              <div
                role='button'
                tabIndex={0}
                className='overlay'
                onClick={this.handleClick}
                onKeyPress={this.handleClick}
              />
            </>
          )
        }
      </>
    )
  }
}

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string
  }).isRequired,
  uploaded: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func
}

Photo.defaultProps = {
  handleRemove: () => {}
}

export default Photo;