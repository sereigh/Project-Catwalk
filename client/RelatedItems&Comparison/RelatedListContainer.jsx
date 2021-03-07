import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductList from './RelatedProductList.jsx';
import dummyProductCards from './dummyProductCards';

class RelatedListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // relatedProductIds: [
      //   17219,
      //   17810,
      //   17174
      // ],
      relatedProductCards: dummyProductCards
    }
  }

  // componentDidMount() {
  //   const {selectProductId} = this.props;
  //   this.getRelatedProductIds(selectProductId);
  // }

  // getRelatedProductIds(productId) {
  //   axios
  //   .get(`/products/${productId}/related`)
  //   .then((response) => {
  //     console.log('related', response.data);
  //     this.setState({
  //       relatedProductIds: response.data
  //     })
  //   })
  //   .catch((error) => {
  //     console.log('Get related items failed...', error);
  //   })
  // }

/**
 * product_id
 * name
 * category
 * prices
 * styles
 * features
 */

  // getRelatedProductInformation() {
  //   //get details and styles
  //   let {relatedProductIds} = this.state;
  //   let cards = [];
  //   for (var i = 0; i < relatedProductIds.length; i++) {
  //     let productId = relatedProductIds[i];
  //     let card = {};
  //     axios
  //       .get(`/products/${productId}`)
  //       .then((response) => {
  //         card[productId] =
  //         card[name] =
  //         card[category]
  //         card[features]
  //       })
  //   }
  // }

  // createProductCardInformation() {
  //   axios
  //     .get(`/products/${}`)
  // }

  render() {
    const {relatedProductCards} = this.state;
    const {selectProductInfo} = this.props;
    return (
      <div>
        <ul>
          <div>
            **RelatedProductList**
            <RelatedProductList productCards={relatedProductCards} selectProductInfo={selectProductInfo} />
          </div>
          <div>**OutfitList**</div>
        </ul>
      </div>
    );
  }
};

RelatedListContainer.propTypes = {
  // selectProductId: PropTypes.number.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired
};


export default RelatedListContainer;

// selectProductInfo: PropTypes.shape({
//   id: PropTypes.number,
//   campus: PropTypes.string,
//   name: PropTypes.string,
//   slogan: PropTypes.string,
//   description: PropTypes.string,
//   category: PropTypes.string,
//   default_price: PropTypes.string,
//   created_at: PropTypes.string,
//   updated_at: PropTypes.string,
//   features: PropTypes.arrayOf(PropTypes.shape({
//     feature: PropTypes.string,
//     value: PropTypes.string
//   }))
// }).isRequired