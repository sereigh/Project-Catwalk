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
      leftCordinate: 0
    }
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
      .catch((error) => {
        console.log('Get related items failed...', error);
      });
  }

  moveToNextCard() {
    const {leftCordinate} = this.state;
    this.setState({
      leftCordinate: leftCordinate - 200
    });
  }

  moveToPrevCard() {
    const {leftCordinate} = this.state;
    this.setState({
      leftCordinate: leftCordinate + 200
    });
  }


  render() {
    const {relatedProductIds, leftCordinate} = this.state;
    const {selectProductInfo, selectAnotherProduct} = this.props;
    return (
      <div className="relatedProductList">
        <button type="button" className="leftArrow" onClick={this.moveToPrevCard}>&lt;</button>
        <div className="carousel-container">
          <div className="carousel" style={{left: `${leftCordinate}px`}}>
            {relatedProductIds.map(productId => (
              <ProductCard key={productId} selectProductInfo={selectProductInfo} productId={productId} selectAnotherProduct={selectAnotherProduct} isRelated />
            ))}
          </div>
        </div>
        <button type="button" className="rightArrow" onClick={this.moveToNextCard}>&gt;</button>
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
