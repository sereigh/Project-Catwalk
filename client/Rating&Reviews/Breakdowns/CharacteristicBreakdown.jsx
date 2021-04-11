import React from "react";
import PropTypes from "prop-types";

import CharacteristicDisplay from "./CharacteristicDisplay.jsx";

const CharacteristicBreakdown = ({ characteristics }) => {
  const characteristicTuples = [];

  for (const characteristic in characteristics) {
    if ({}.hasOwnProperty.call(characteristics, characteristic)) {
      const info = characteristics[characteristic];
      characteristicTuples.push([characteristic, info]);
    }
  }

  return (
    <div>
      {characteristicTuples.map((tuple) => (
        <CharacteristicDisplay
          key={tuple[1].id}
          characteristic={tuple[0]}
          value={tuple[1].value}
        />
      ))}
    </div>
  );
};

CharacteristicBreakdown.propTypes = {
  characteristics: PropTypes.shape({
    Comfort: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Fit: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Length: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Quality: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Size: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Width: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  }),
};

CharacteristicBreakdown.defaultProps = {
  characteristics: {},
};

export default CharacteristicBreakdown;
