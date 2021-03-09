import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({summary}) => {
  if (summary.length > 60) {
    const summaryBeginning = summary.substring(0, 60);
    const summaryEnding = summary.substring(60);
    return (
      <>
        <h3>{`${summaryBeginning  }...`}</h3>
        <div>{`...${summaryEnding}`}</div>
      </>
    )
  }

  return (
    <h3>{summary}</h3>
  )
}

Summary.propTypes = {
  summary: PropTypes.string.isRequired
}

export default Summary;