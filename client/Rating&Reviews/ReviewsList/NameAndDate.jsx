import React from 'react';
import PropTypes from 'prop-types';

import highlightSearchTerm from './highlightSearchTerm.jsx';

const convertDate = date => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateObj = new Date(date);
  const day = dateObj.getDate() + 1;
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
}

const NameAndDate = ({verified, name, date, searchTerm}) => {
  let highlightedName = name;

  if (searchTerm.length >= 3) {
    highlightedName = highlightSearchTerm(name, searchTerm);
  }

  return (
    <span className='name-and-date'>
      {`${verified ? 'Verified purchaser  ' : ''}`}
      {highlightedName}
      {`, ${  convertDate(date)}`}
    </span>
    )
}

NameAndDate.propTypes = {
  verified: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default NameAndDate;