import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.jsx';
import PlusCard from './PlusCard.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCordinate: 0,
      slideLength: 800,
      leftArrowVisibility: 'hidden',
      rightArrowVisibility: 'visible'
    }
    this.myRef = React.createRef();
    this.moveToNextCard = this.moveToNextCard.bind(this);
    this.moveToPrevCard = this.moveToPrevCard.bind(this);
  }

  componentDidUpdate() {
    const {userOutfits} = this.props;
    const {slideLength} = this.state;
    if (userOutfits.length !== slideLength / 220) {
      this.updateSlideLength();
    }
    this.setRightArrowVisibility();
    this.setLeftArrowVisibility();
  }

  setLeftArrowVisibility() {
    const {leftCordinate, leftArrowVisibility} = this.state;
    if (leftCordinate < 0) {
      if (leftArrowVisibility === 'hidden') {
        this.setState({
          leftArrowVisibility: 'visible'
        });
      }
    } else if (leftArrowVisibility === 'visible') {
      this.setState({
        leftArrowVisibility: 'hidden'
      });
    }
  }

  setRightArrowVisibility() {
    const {leftCordinate, slideLength, rightArrowVisibility} = this.state;
    if (this.myRef.current.offsetWidth < slideLength + leftCordinate ) {
      if (rightArrowVisibility === 'hidden') {
        this.setState({
          rightArrowVisibility: 'visible'
        });
      }
    } else if (rightArrowVisibility === 'visible') {
      this.setState({
        rightArrowVisibility: 'hidden'
      });
    }
  }

  moveToNextCard() {
    const {leftCordinate, slideLength} = this.state;
    if (this.myRef.current.offsetWidth < slideLength + leftCordinate ) {
      this.setState({
        leftCordinate: leftCordinate - 220
      });
    }
  }

  moveToPrevCard() {
    const {leftCordinate} = this.state;
    if (leftCordinate < 0) {
      this.setState({
        leftCordinate: leftCordinate + 220
      });
    }
  }

  updateSlideLength() {
    const{userOutfits} = this.props;
    const numberOfCards = userOutfits.length;
    this.setState({
      slideLength:  numberOfCards * 220
    });
  }

  render() {
    const {leftCordinate, slideLength, leftArrowVisibility, rightArrowVisibility} = this.state;
    const {selectProductId, selectAnotherProduct, addNewOutfit, deleteOutfit, userOutfits} = this.props;
    return (
      <div className="outfitList">
        <button type="button" className="leftArrow" style={{visibility: leftArrowVisibility}} onClick={this.moveToPrevCard}>&lt;</button>
        <PlusCard selectProductId={selectProductId} addNewOutfit={addNewOutfit} />
        <div className="carousel-container" ref={this.myRef}>
          <div className="carousel" style={{left: `${leftCordinate}px`, width: `${slideLength}px`}}>
            {userOutfits.map(productId => (
              <ProductCard key={productId} productId={productId} selectAnotherProduct={selectAnotherProduct} deleteOutfit={deleteOutfit} />
            ))}
          </div>
        </div>
        <button type="button" className="rightArrow" style={{visibility: rightArrowVisibility}} onClick={this.moveToNextCard}>&gt;</button>
      </div>
    );
  }
}

OutfitList.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  deleteOutfit: PropTypes.func.isRequired,
  userOutfits: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default OutfitList;
