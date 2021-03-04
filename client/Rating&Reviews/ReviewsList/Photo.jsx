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
    const {photo} = this.props;
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
              <img className='modal' src={photo.url} alt='product' />
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
  }).isRequired
}

export default Photo;