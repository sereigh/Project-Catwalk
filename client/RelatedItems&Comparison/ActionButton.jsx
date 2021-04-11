import React from "react";
import PropTypes from "prop-types";

const ActionButton = ({
  toggleModalWindow,
  isRelated,
  deleteOutfit,
  productId,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    deleteOutfit(productId);
  };

  const [imgFilePath, setImg] = React.useState("./img/star(1).png");

  const toggleImageFile = () => {
    if (imgFilePath === "./img/star(1).png") {
      setImg("./img/star(4).png");
    } else {
      setImg("./img/star(1).png");
    }
  };

  const selectButton = () =>
    isRelated ? (
      <span
        role="button"
        tabIndex={0}
        onMouseEnter={toggleImageFile}
        onMouseLeave={toggleImageFile}
        onClick={toggleModalWindow}
        onKeyPress={toggleModalWindow}
      >
        <img src={imgFilePath} className="actionBtn" alt="starBtn" />
      </span>
    ) : (
      <span
        className="actionBtn closeBtn"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        X
      </span>
    );

  return <div>{selectButton()}</div>;
};

ActionButton.propTypes = {
  toggleModalWindow: PropTypes.func,
  isRelated: PropTypes.bool.isRequired,
  deleteOutfit: PropTypes.func,
  productId: PropTypes.number.isRequired,
};

ActionButton.defaultProps = {
  toggleModalWindow: null,
  deleteOutfit: null,
};

export default ActionButton;
