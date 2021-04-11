import React from "react";
import PropTypes from "prop-types";

const Response = ({ response }) => {
  if (response) {
    return (
      <>
        <div className="review-response">
          <p>
            <strong>Response:</strong>
          </p>
          <p>{response}</p>
        </div>
        <br />
      </>
    );
  }

  return null;
};

Response.propTypes = {
  response: PropTypes.string,
};

Response.defaultProps = {
  response: null,
};

export default Response;
