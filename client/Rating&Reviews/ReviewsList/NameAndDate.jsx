import React from "react";
import PropTypes from "prop-types";

import getDate from "../../SharedComponents/DateConversion.jsx";

import highlightSearchTerm from "./highlightSearchTerm.jsx";

const NameAndDate = ({ verified, name, date, searchTerm }) => {
  let highlightedName = name;

  if (searchTerm.length >= 3) {
    highlightedName = highlightSearchTerm(name, searchTerm);
  }

  return (
    <span className="name-and-date">
      {`${verified ? "Verified purchaser  " : ""}`}
      {highlightedName}
      {`, ${getDate(date)}`}
    </span>
  );
};

NameAndDate.propTypes = {
  verified: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default NameAndDate;
