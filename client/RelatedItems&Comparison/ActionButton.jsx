import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({toggleModalWindow}) => (
  <div>
    <button className="actionBtn" type="button" onClick={toggleModalWindow}>☆</button>
  </div>
);

ActionButton.propTypes = {
  toggleModalWindow: PropTypes.func.isRequired
}

export default ActionButton;
