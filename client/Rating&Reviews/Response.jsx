import React from 'react';

const Response = ({response}) => {
  if (response) {
    return (
      <div>
        Response:
        {response}
      </div>
    )
  }

  return null;
}

export default Response;