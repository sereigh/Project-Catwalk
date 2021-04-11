import React from "react";
import PropTypes from "prop-types";

import generateDescription from "../generateDescription";

class CharacteristicRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "None Selected",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, characteristic) {
    const { handleCharacteristicRate } = this.props;

    handleCharacteristicRate(event, characteristic);

    this.setState({
      description: generateDescription(
        characteristic,
        parseInt(event.target.value, 10)
      ),
    });
  }

  render() {
    const { characteristic, value } = this.props;
    const { description } = this.state;

    return (
      <div>
        <span>{`${characteristic}: `}</span>
        <span className="dynamic-description">{description}</span>
        <div className="flex-row">
          <div className="flex-column">
            <input
              type="radio"
              name={`${characteristic}-rating`}
              value="1"
              checked={value === 1}
              onChange={(event) => this.handleChange(event, characteristic)}
            />
            <span>{generateDescription(characteristic, 1)}</span>
          </div>
          <div className="flex-column">
            <input
              type="radio"
              name={`${characteristic}-rating`}
              value="2"
              checked={value === 2}
              onChange={(event) => this.handleChange(event, characteristic)}
            />
          </div>
          <div className="flex-column">
            <input
              type="radio"
              name={`${characteristic}-rating`}
              value="3"
              checked={value === 3}
              onChange={(event) => this.handleChange(event, characteristic)}
            />
          </div>
          <div className="flex-column">
            <input
              type="radio"
              name={`${characteristic}-rating`}
              value="4"
              checked={value === 4}
              onChange={(event) => this.handleChange(event, characteristic)}
            />
          </div>
          <div className="flex-column">
            <input
              type="radio"
              name={`${characteristic}-rating`}
              value="5"
              checked={value === 5}
              onChange={(event) => this.handleChange(event, characteristic)}
            />
            <span>{generateDescription(characteristic, 5)}</span>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

CharacteristicRate.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleCharacteristicRate: PropTypes.func.isRequired,
};

export default CharacteristicRate;
