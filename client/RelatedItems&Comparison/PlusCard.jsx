import React from 'react';
import PropTypes from 'prop-types';

const PlusCard = ({selectProductId, addNewOutfit}) => {
  const handleClick = (e) => {
    e.preventDefault();
    addNewOutfit(selectProductId);
  }

  return (
    <div className="productCard-container">
      <div className="productCard">
        <button className="plusBtn" type="button" onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

PlusCard.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  addNewOutfit: PropTypes.func.isRequired
}

export default PlusCard;
