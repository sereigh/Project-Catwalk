import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({toggleModalWindow, isRelated}) => {
  const selectButton = () => (
    isRelated ? <button className="actionBtn" type="button" onClick={toggleModalWindow}>☆</button> :
      <button className="actionBtn" type="button">X</button>
  );

  return (
    <div>
      {selectButton()}
    </div>
  );
};

ActionButton.propTypes = {
  toggleModalWindow: PropTypes.func.isRequired,
  isRelated: PropTypes.bool.isRequired
}

export default ActionButton;
