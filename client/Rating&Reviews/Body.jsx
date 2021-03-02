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
      const bodyBeginning = body.substring(0, 251);
      return (
        <>
          <p>{`${bodyBeginning  }...`}</p>
          <button type='button' onClick={this.handleClick}>Show More</button>
        </>
      )
    }

    return (
      <>
        <p>{body}</p>
        <button type='button' onClick={this.handleClick}>Show Less</button>
      </>
    )
  }
}

Body.propTypes = {
  body: PropTypes.string.isRequired
}

export default Body;