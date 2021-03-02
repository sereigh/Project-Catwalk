
import React from 'react';

const Summary = ({summary}) => {
  if (summary.length > 60) {
    const summaryBeginning = summary.substring(0, 61);
    const summaryEnding = summary.substring(61);
    return (
      <>
        <div>
          {`${summaryBeginning  }...`}
        </div>
        <br />
        <div>
          {`...${summaryEnding}`}
        </div>
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

export default Summary;