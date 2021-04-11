import React from "react";
import PropTypes from "prop-types";

import ProductCard from "./ProductCard.jsx";
import PlusCard from "./PlusCard.jsx";

const cardSize = 210;

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCordinate: 0,
      slideLength: 800,
      leftArrowVisibility: "hidden",
      rightArrowVisibility: "visible",
    };
    this.myRef = React.createRef();
    this.moveToNextCard = this.moveToNextCard.bind(this);
    this.moveToPrevCard = this.moveToPrevCard.bind(this);
  }

  componentDidUpdate() {
    const { userOutfits } = this.props;
    const { slideLength } = this.state;
    if (userOutfits.length !== (slideLength - 2) / cardSize) {
      this.updateSlideLength();
    }
    this.setRightArrowVisibility();
    this.setLeftArrowVisibility();
  }

  setLeftArrowVisibility() {
    const { leftCordinate, leftArrowVisibility } = this.state;
    if (leftCordinate < 0) {
      if (leftArrowVisibility === "hidden") {
        this.setState({
          leftArrowVisibility: "visible",
        });
      }
    } else if (leftArrowVisibility === "visible") {
      this.setState({
        leftArrowVisibility: "hidden",
      });
    }
  }

  setRightArrowVisibility() {
    const { leftCordinate, slideLength, rightArrowVisibility } = this.state;
    if (this.myRef.current.offsetWidth < slideLength + leftCordinate) {
      if (rightArrowVisibility === "hidden") {
        this.setState({
          rightArrowVisibility: "visible",
        });
      }
    } else if (rightArrowVisibility === "visible") {
      this.setState({
        rightArrowVisibility: "hidden",
      });
    }
  }

  moveToNextCard() {
    const { leftCordinate, slideLength } = this.state;
    if (this.myRef.current.offsetWidth < slideLength + leftCordinate) {
      this.setState({
        leftCordinate: leftCordinate - cardSize,
      });
    }
  }

  moveToPrevCard() {
    const { leftCordinate } = this.state;
    if (leftCordinate < 0) {
      this.setState({
        leftCordinate: leftCordinate + cardSize,
      });
    }
  }

  updateSlideLength() {
    const { userOutfits } = this.props;
    const numberOfCards = userOutfits.length;
    this.setState({
      slideLength: numberOfCards * cardSize + 2,
    });
  }

  render() {
    const {
      leftCordinate,
      slideLength,
      leftArrowVisibility,
      rightArrowVisibility,
    } = this.state;
    const {
      selectProductId,
      selectAnotherProduct,
      addNewOutfit,
      deleteOutfit,
      userOutfits,
    } = this.props;
    return (
      <div className="outfitList">
        <span
          className="leftArrow"
          tabIndex={0}
          role="button"
          style={{ visibility: leftArrowVisibility }}
          onKeyPress={this.moveToPrevCard}
          onClick={this.moveToPrevCard}
        >
          <img
            src="./img/left-arrow-button.png"
            alt="left-arrow"
            style={{ width: "30px", height: "30px" }}
          />
        </span>
        <PlusCard
          selectProductId={selectProductId}
          addNewOutfit={addNewOutfit}
        />
        <div className="carousel-container" ref={this.myRef}>
          <div
            className="carousel"
            style={{ left: `${leftCordinate}px`, width: `${slideLength}px` }}
          >
            {userOutfits.map((productId) => (
              <ProductCard
                key={productId}
                productId={productId}
                selectAnotherProduct={selectAnotherProduct}
                deleteOutfit={deleteOutfit}
              />
            ))}
          </div>
        </div>
        <span
          className="rightArrow"
          tabIndex={0}
          role="button"
          style={{ visibility: rightArrowVisibility }}
          onKeyPress={this.moveToNextCard}
          onClick={this.moveToNextCard}
        >
          <img
            src="./img/right-arrow-button.png"
            alt="right-arrow"
            style={{ width: "30px", height: "30px" }}
          />
        </span>
      </div>
    );
  }
}

OutfitList.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  deleteOutfit: PropTypes.func.isRequired,
  userOutfits: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default OutfitList;
