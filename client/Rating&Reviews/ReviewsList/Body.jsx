import React from "react";
import PropTypes from "prop-types";

import highlightSearchTerm from "./highlightSearchTerm.jsx";

class Body extends React.Component {
  constructor(props) {
    super(props);
    const { body } = this.props;

    this.state = {
      fullyVisible: body.length <= 250,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { fullyVisible } = this.state;

    this.setState({
      fullyVisible: !fullyVisible,
    });
  }

  render() {
    const { fullyVisible } = this.state;
    const { searchTerm } = this.props;
    let { body } = this.props;
    let bodyBeginning = `${body.substring(0, 250)}...`;

    if (body.length <= 250) {
      return <p>{body}</p>;
    }

    if (searchTerm.length >= 3) {
      body = highlightSearchTerm(body, searchTerm);
      bodyBeginning = highlightSearchTerm(bodyBeginning, searchTerm);
    }

    if (!fullyVisible) {
      return (
        <div className="show-review">
          <p>{bodyBeginning}</p>
          <button
            className="expand-review"
            type="button"
            onClick={this.handleClick}
          >
            SHOW MORE
          </button>
          <br />
        </div>
      );
    }

    return (
      <div className="show-review">
        <p>{body}</p>
        <button
          className="expand-review"
          type="button"
          onClick={this.handleClick}
        >
          SHOW LESS
        </button>
        <br />
      </div>
    );
  }
}

Body.propTypes = {
  body: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Body;
