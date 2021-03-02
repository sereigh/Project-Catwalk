import React from 'react';

const convertDate = date => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateObj = new Date(date);
  const day = dateObj.getDate() + 1;
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
}

const NameAndDate = ({name, date}) => (
  <span className='name-and-date'>
    {`${name  }, ${  convertDate(date)}`}
  </span>
)

export default NameAndDate;