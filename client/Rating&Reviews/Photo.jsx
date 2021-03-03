import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {show} = this.state;

    this.setState({
      show: !show
    })
  }

  render() {
    const {photo} = this.props;

    return (
      <>
        <img className='photo' src={photo.url} alt='product' /* onClick={this.handleClick} */ />
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