import React from 'react';
import PropTypes from 'prop-types';

class Body extends React.Component {
  constructor(props) {
    super(props);
    const {body} = this.props;

    this.state = {
      fullyVisible: body.length <= 250
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {fullyVisible} = this.state;

    this.setState({
      fullyVisible: !fullyVisible
    })
  }

  render() {
    const {fullyVisible} = this.state;
    const {body} = this.props;

    if (body.length <= 250) {
      return (
        <p>{body}</p>
      )
    }

    if (!fullyVisible) {
      const bodyBeginning = body.substring(0, 250);
      return (
        <div className='show-review'>
          <p>{`${bodyBeginning  }...`}</p>
          <button className='expand-review' type='button' onClick={this.handleClick}>SHOW MORE</button>
          <br />
        </div>
      )
    }

    return (
      <div className='show-review'>
        <p>{body}</p>
        <button className='expand-review' type='button' onClick={this.handleClick}>SHOW LESS</button>
        <br />
      </div>
    )
  }
}

Body.propTypes = {
  body: PropTypes.string.isRequired
}

export default Body;