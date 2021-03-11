import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({toggleModalWindow, isRelated, deleteOutfit, productId}) => {
  const handleClick = (e) => {
    e.preventDefault();
    deleteOutfit(productId);
  }

  const [imgFilePath, setImg] = React.useState('./star(1).png');

  const toggleImageFile = () => {
    console.log(imgFilePath);
    if (imgFilePath === './star(1).png') {
      setImg('./star(4).png');
    } else {
      setImg('./star(1).png');
    }
  }

  const selectButton = () => (
    isRelated ? <img src={imgFilePath} className="actionBtn" alt="starBtn" onMouseEnter={toggleImageFile} onMouseLeave={toggleImageFile} onClick={toggleModalWindow} onKeyPress={()=>{}} /> :
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
