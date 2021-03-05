import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';
import ComparisonModal from './ComparisonModal.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'none',
      productStyles: [],
      productInfo: {}
    }
    this.toggleModalWindow = this.toggleModalWindow.bind(this);
  }

  componentDidMount() {
    this.retrieveProductStyle();
    this.retrieveProductInfo();
  }

  toggleModalWindow() {
    const { window } = this.state;
    if (window === 'none') {
      this.setState({
        window: 'block'
      });
    } else {
      this.setState({
        window: 'none'
      });
    }
  }

  retrieveProductStyle() {
    const { productId } = this.props;
    axios
      .get(`/products/${productId}/styles`)
      .then((response) => {
        this.setState({
          productStyles: response.data.results
        })
      })
      .catch((error) => {
        console.log('Get product style options failed...', error);
      })
  }

  retrieveProductInfo() {
    const { productId } = this.props;
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        this.setState({
          productInfo: response.data
        })
      })
      .catch((error) => {
        console.log('Get product information failed...', error);
      })
  }

  render() {
    const { productCard, selectProductInfo } = this.props;
    const { window } = this.state;
    return (
      <div>
        <div className="productCard" style={{ border: 'solid black 1px' }}>
          <ActionButton toggleModalWindow={this.toggleModalWindow} />
          <PreviewImages styles={productCard.styles} />
          <div>
            <div>{productCard.category}</div>
            <div>{productCard.name}</div>
            <div>{`$${productCard.price}`}</div>
            <div>{productCard.starRating}</div>
          </div>
        </div>
        <ComparisonModal name={productCard.name} features={productCard.features} window={window} toggleModalWindow={this.toggleModalWindow} selectProductInfo={selectProductInfo} />
      </div>
    );
  }
}


// const trimProductDetails = () => {
//   if (selectProductInfo.features) {

//     let features1 = productCard.features.slice(0);
//     let features2 = selectProductInfo.features.slice(0);

//     let allFeatures = features1.map((feature) => {
//       const target = features2.find(item => item.feature === feature.feature);
//       if (target) {
//         return {value1: feature.value, value2: target.value, feature: feature.feature};
//       }
//       return
//     });

//     return allFeatures;
//   }
// };

// console.log(trimProductDetails());

// retrieveProductInfo() {
//   axios.
// }

ProductCard.propTypes = {
  productCard: PropTypes.shape({
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
  }).isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  productId: PropTypes.number.isRequired
}

export default ProductCard;
