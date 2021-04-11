import React from "react";
import PropTypes from "prop-types";

const BodySubmit = ({ handleBodyChange, charactersLeftMessage, bodyError }) => (
  <span>
    <span className={bodyError ? "error" : null}>{"*Review Body: "}</span>
    <textarea
      className="review-body"
      placeholder="Why did you like the product or not?"
      maxLength={1000}
      onChange={handleBodyChange}
    />
    <span>{charactersLeftMessage}</span>
  </span>
);

BodySubmit.propTypes = {
  handleBodyChange: PropTypes.func.isRequired,
  charactersLeftMessage: PropTypes.string.isRequired,
  bodyError: PropTypes.bool.isRequired,
};

export default BodySubmit;
