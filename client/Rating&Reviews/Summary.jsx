import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({summary}) => {
  if (summary.length > 60) {
    const summaryBeginning = summary.substring(0, 61);
    const summaryEnding = summary.substring(61);
    return (
      <>
        <div>{`Summary: ${summaryBeginning  }...`}</div>
        <br />
        <div>{`...${summaryEnding}`}</div>
      </>
    )
  }

  return (
    <div>
      Summary:
      {summary}
    </div>
  )
}

Summary.propTypes = {
  summary: PropTypes.string.isRequired
}

export default Summary;