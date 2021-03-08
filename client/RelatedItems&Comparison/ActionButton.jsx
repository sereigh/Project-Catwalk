import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({toggleModalWindow, isRelated, deleteOutfit, productId}) => {
  const handleClick = (e) => {
    e.preventDefault();
    deleteOutfit(productId);
  }
  const selectButton = () => (
    isRelated ? <button className="actionBtn" type="button" onClick={toggleModalWindow}>☆</button> :
    <button className="actionBtn" type="button" onClick={handleClick}>X</button>
  );

  return (
    <div>
      {selectButton()}
    </div>
  );
};

ActionButton.propTypes = {
  toggleModalWindow: PropTypes.func,
  isRelated: PropTypes.bool.isRequired,
  deleteOutfit: PropTypes.func,
  productId: PropTypes.number.isRequired
}

ActionButton.defaultProps = {
  toggleModalWindow: null,
  deleteOutfit: null
}

export default ActionButton;
