import React from 'react';
import RelatedProductList from './RelatedProductList.jsx';

class RelatedListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {userId: 1, products: [
          {productId: 17762}
          ]
        }
      ]
    }
  }

  render() {
    const {users} = this.state;
    return (
      <div>
        RelatedListContainer
        <ul>
          <RelatedProductList />
          <div>OutfitList</div>
        </ul>
      </div>
    );
  }
};

export default RelatedListContainer;