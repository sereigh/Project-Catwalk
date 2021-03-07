import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ProductCard from './ProductCard.jsx';
import dummyProductCards from './dummyProductCards';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductCards: dummyProductCards,
      relatedProductIds: [
        17219,
        17810,
        17174
      ]
    }
  }

  componentDidMount() {
    console.log('mounterdjflsdjkf');
    this.getRelatedProductIds();
  }

  componentDidUpdate(prevProps) {
    const {selectProductId} = this.props;
    console.log('udaated id: ', selectProductId);
    if (selectProductId !== prevProps.selectProductId) {
      this.getRelatedProductIds();
    }
  }

  getRelatedProductIds() {
    const {selectProductId} = this.props;
    console.log(selectProductId);
    axios
      .get(`/products/${selectProductId}/related`)
      .then((response) => {
        console.log('related', response.data);
        this.setState({
          relatedProductIds: response.data
        });
      })
      // .then(() => {
      //   this.getRelatedProductCards();
      // })
      .catch((error) => {
        console.log('Get related items failed...', error);
      });
  }

  render() {
    const {relatedProductCards, relatedProductIds} = this.state;
    const {selectProductInfo, selectAnotherProduct} = this.props;
    return (
      <div className="relatedProductList">
        {relatedProductIds.map(productId => (
          <ProductCard key={productId} selectProductInfo={selectProductInfo} productId={productId} selectAnotherProduct={selectAnotherProduct} />
        ))}
      </div>
    );
  }
}

RelatedProductList.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  productCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    starRating: PropTypes.string,
    styles: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      default: PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string
      }))
    })),
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  })),
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func
}

RelatedProductList.defaultProps = {
  productCards: []
}

export default RelatedProductList;