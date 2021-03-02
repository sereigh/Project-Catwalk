import React from 'react';
import RelatedProductList from './RelatedProductList.jsx';
import dummyProductCards from './dummyProductCards.js';

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
      RelatedProductCards: dummyProductCards
    }
  }

  render() {
    const {RelatedProductCards} = this.state;
    return (
      <div>
        RelatedListContainer
        <ul>
          <RelatedProductList productCards={RelatedProductCards}/>
          <div>OutfitList</div>
        </ul>
      </div>
    );
  }
};

export default RelatedListContainer;