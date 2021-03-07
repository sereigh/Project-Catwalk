import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductList from './RelatedProductList.jsx';

class RelatedListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this is container!@@@@@@@@@@@@@');
  }

  componentDidUpdate() {
    console.log('this is container%%%%%%%%%%%%%%%%');
  }

  // getRelatedProductIds(productId) {
  //   axios
  //   .get(`/products/${productId}/related`)
  //   .then((response) => {
  //     console.log('related', response.data);
  //     this.setState({
  //       relatedProductIds: response.data
  //     })
  //   })
  //   .then(() => {
  //     this.getRelatedProductCards();
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

  // getRelatedProductCards() {
  //   const {relatedProductIds} = this.state;
  //   relatedProductIds.forEach(id => {
  //     this.getProductInfo(id);
  //     this.getProductStyle(id);
  //   });
  // }

  // getProductStyle(id) {
  //   return (
  //     axios
  //       .get(`products/${id}/style`)
  //       .then((response) => {
  //         console.log('stylessss: ', response);
  //         const {relatedProductStyle} = this.state;
  //         relatedProductStyle.push(response.data);
  //       })
  //       .catch((err) => {
  //         console.log('sytle err',err);
  //       })
  //   )
  // }

  // getProductInfo(id) {
  //   return (
  //     axios
  //       .get(`products/${id}`)
  //       .then((response) => {
  //         console.log('infosss: ', response);
  //         const {relatedProductInfos} = this.state;
  //         relatedProductInfos.push(response.data);
  //       })
  //       .catch((err) => {
  //         console.log('info err', err);
  //       })
  //   )
  // }

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
    const {selectProductInfo, selectProductId, selectAnotherProduct} = this.props;
    return (
      <div>
        <ul>
          <div>
            **RelatedProductList**
            <RelatedProductList selectProductInfo={selectProductInfo} selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} />
          </div>
          <div>**OutfitList**</div>
        </ul>
      </div>
    );
  }
};

RelatedListContainer.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired
};


export default RelatedListContainer;
