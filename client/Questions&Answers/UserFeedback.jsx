import React from 'react';
import PropTypes from 'prop-types';

import { setDate } from './Utility.jsx';

function TextLink({ option, handler }) {
const options = ['Report', 'Yes']
  return (
    <span
      className="answersFeedback-right"
      name={option}
      onClick={(type, id, opt) => handler(type, id, opt)}
      onKeyPress={() => handler()}
      role="button"
      tabIndex={0}
    >
      <u>{options[option]}</u>
    </span>
  )
}

const UserInfo = ({ name, date }) => (
  <span
    className="answersFeedback-left"
  >
    {`by ${name} -  ${setDate(date)}  |  `}
  </span>
)

TextLink.propTypes = {
  option: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
}
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  }

export default TextLink;
export { UserInfo };
