import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ProductCard from './ProductCard.jsx';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [
        17431
      ],
      leftCordinate: 0,
      slideLength: 800,
      leftArrowVisibility: 'hidden',
      rightArrowVisibility: 'visible'
    }
    this.myRef = React.createRef();
    this.moveToNextCard = this.moveToNextCard.bind(this);
    this.moveToPrevCard = this.moveToPrevCard.bind(this);
  }

  componentDidMount() {
    this.getRelatedProductIds();
  }

  componentDidUpdate(prevProps) {
    const {selectProductId} = this.props;
    if (selectProductId !== prevProps.selectProductId) {
      this.getRelatedProductIds();
    }
    this.setRightArrowVisibility();
    this.setLeftArrowVisibility();
  }

  getRelatedProductIds() {
    const {selectProductId} = this.props;
    axios
      .get(`/products/${selectProductId}/related`)
      .then((response) => {
        this.setState({
          relatedProductIds: response.data
        });
      })
      .then(() => {
        this.updateSlideLength();
      })
      .catch((error) => {
        console.log('Get related items failed...', error);
      });
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
    const{relatedProductIds} = this.state;
    const numberOfCards = relatedProductIds.length;
    this.setState({
      slideLength:  numberOfCards * 220 + 2
    });
  }

  render() {
    const {relatedProductIds, leftCordinate, slideLength, leftArrowVisibility, rightArrowVisibility} = this.state;
    const {selectProductInfo, selectAnotherProduct} = this.props;
    return (
      <div className="relatedProductList">
        <button type="button" className="leftArrow" style={{visibility: leftArrowVisibility}} onClick={this.moveToPrevCard}>&lt;</button>
        <div className="carousel-container" ref={this.myRef}>
          <div className="carousel" style={{left: `${leftCordinate}px`, width: `${slideLength}px`}}>
            {relatedProductIds.map(productId => (
              <ProductCard key={productId} selectProductInfo={selectProductInfo} productId={productId} selectAnotherProduct={selectAnotherProduct} isRelated />
            ))}
          </div>
        </div>
        <button type="button" className="rightArrow" style={{visibility: rightArrowVisibility}} onClick={this.moveToNextCard}>&gt;</button>
      </div>
    );
  }
}

RelatedProductList.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired
}

export default RelatedProductList;
