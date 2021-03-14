import React from 'react';
import PropTypes from 'prop-types';

function SearchHighlight(props) {
  const { query, body } = props

  return (
    <span>
      {body.substring(body.indexOf(query))}
      {' '}
      <mark>{query}</mark>
      {' '}
      {body.substring(body.indexOf(query) + query.length)}
    </span>
  )
}

SearchHighlight.propTypes = {
  query: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  }

export default SearchHighlight;
