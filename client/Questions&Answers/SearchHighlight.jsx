import React from 'react';
import PropTypes from 'prop-types';

function SearchHighlight(props) {
  const { query, body } = props
  const Query = query.toLowerCase()
  const Body = body.toLowerCase()
  const marked = body.substring(Body.indexOf(Query), Body.indexOf(Query) + query.length)

  return (
    <span>
      {body.substring(0, Body.indexOf(Query))}
      {' '}
      <mark>{marked}</mark>
      {' '}
      {body.substring(Body.indexOf(Query) + query.length)}
    </span>
  )
}

SearchHighlight.propTypes = {
  query: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  }

export default SearchHighlight;
