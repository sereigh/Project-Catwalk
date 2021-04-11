import React from "react";
import PropTypes from "prop-types";

import highlightSearchTerm from "./highlightSearchTerm.jsx";

const Summary = ({ summary, searchTerm }) => {
  let summaryFull = summary;
  let summaryBeginning = `${summary.substring(0, 60)}...`;
  let summaryEnding = `...${summary.substring(60)}`;

  if (searchTerm.length >= 3) {
    summaryFull = highlightSearchTerm(summary, searchTerm);
    summaryBeginning = highlightSearchTerm(summaryBeginning, searchTerm);
    summaryEnding = highlightSearchTerm(summaryEnding, searchTerm);
  }

  if (summary.length > 60) {
    return (
      <>
        <h3>{summaryBeginning}</h3>
        <div>{summaryEnding}</div>
      </>
    );
  }

  return <h3>{summaryFull}</h3>;
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Summary;
