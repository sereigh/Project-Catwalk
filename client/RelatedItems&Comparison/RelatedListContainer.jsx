import React from 'react';
import axios from 'axios';
import RelatedProductList from './RelatedProductList.jsx';
import dummyProductCards from './dummyProductCards';

class RelatedListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {userId: 1, products: [
          {productId: 17762}
          ]
        }
      ],
      relatedProductIds: [
        17219,
        17810,
        17174
      ],
      relatedProductCards: dummyProductCards
    }
  }

  // getRelatedProductIds(productId) {
  //   axios
  //   .get(`/products/${productId}/related`)
  //   .then((response) => {
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
    return (
      <div>
        RelatedListContainer
        <ul>
          <RelatedProductList productCards={relatedProductCards} />
          <div>OutfitList</div>
        </ul>
      </div>
    );
  }
};

export default RelatedListContainer;