import React from 'react';

const Response = ({response}) => {
  if (response) {
    return (
      <>
        <div>
          Response:
          {response}
        </div>
        <br />
      </>
    )
  }

  return null;
}

export default Response;