import React from 'react';
import PropTypes from 'prop-types';

const PlusCard = ({selectProductId, addNewOutfit}) => {
  const handleClick = (e) => {
    e.preventDefault();
    addNewOutfit(selectProductId);
  }

  return (
    <div className="productCard-container plusCard" role="button" tabIndex={0} onClick={handleClick} onKeyPress={handleClick}>
      <div className="productCard">
        <img src="./img/add(2).png" alt="add" className="plusBtn" />
      </div>
    </div>
  );
}

PlusCard.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  addNewOutfit: PropTypes.func.isRequired
}

export default PlusCard;
