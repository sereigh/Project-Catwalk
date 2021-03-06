import React from 'react';
import PropTypes from 'prop-types';

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

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  seller: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
}

export default UserInfo;