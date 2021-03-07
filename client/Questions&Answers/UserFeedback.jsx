import React from 'react';
import PropTypes from 'prop-types';

function Feedback({ option, helpfulness, handler }) {
  return (
    <>
      <p>
        {`   Helpful? `}
        <TextLink option={3} handler={() => handler()} />
        {` (${helpfulness})   |   `}
        <TextLink option={option} handler={() => handler()} />
      </p>
    </>
  )
}

function TextLink({ option, handler }) {

const options = ['Report', 'Reported', 'Add Comment', 'Yes'];

  return (
    <span
      name={option}
      onClick={(type, i, id, opt) => handler(type, i, id, opt)}
      onKeyPress={() => handler()}
      role="button"
      tabIndex={0}
    >
      <u>{options[option]}</u>
    </span>
  )
}

const UserInfo = ({ name, seller, date }) => (


  (seller ? (
    <>
      {`by ${name} - `}
      <strong>Seller</strong>
      ,
      {` ${date}  |  `}
    </>
) : (
  <>
    {`by ${name} -  ${date}  |  `}
  </>
))


)

Feedback.propTypes = {
  option: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
}
TextLink.propTypes = {
  option: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
}
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  seller: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  }

export default Feedback;
export { TextLink, UserInfo };
