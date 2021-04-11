import React from "react";
import PropTypes from "prop-types";

import generateDescription from "../generateDescription";

import CharacteristicBar from "./CharacteristicBar.jsx";

const CharacteristicDisplay = ({ characteristic, value }) => (
  <>
    <div>
      <div className="characteristic-label">{characteristic}</div>
      <CharacteristicBar value={value} />
      <div className="breakdown-descriptions">
        <span>{generateDescription(characteristic, 1)}</span>
        <span>{generateDescription(characteristic, 5)}</span>
      </div>
    </div>
    <br />
  </>
);

CharacteristicDisplay.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CharacteristicDisplay;
