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
      relatedProductIds: [],
      relatedProductCards: dummyProductCards
    }
  }

  getRelatedProductIds(productId) {
    axios
    .get(`/products/${productId}/related`)
    .then((response) => {
      this.setState({
        relatedProductIds: response.data
      })
    })
    .catch((error) => {
      console.log('Get related items failed...', error);
    })
  }

  createProductCardInformation() {

  }

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