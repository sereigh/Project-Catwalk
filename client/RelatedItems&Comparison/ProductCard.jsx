import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Stars from '../SharedComponents/Stars.jsx';

import ActionButton from './ActionButton.jsx';
import PreviewImages from './PreviewImages.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import dummyStyleData from './dummyStyleData';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'none',
      productStyles: dummyStyleData,
      currentStyle: [dummyStyleData[0]],
      productInfo: {
        "id": 17810,
        "campus": "hr-rfp",
        "name": "Forrest Tank Top",
        "slogan": "Id ut facere nesciunt aut omnis sapiente iste dolorum possimus.",
        "description": "Delectus molestiae adipisci sint. At hic nulla voluptatem. Voluptates eos praesentium atque. Doloremque atque maxime deserunt fugit accusantium labore facere.",
        "category": "Tank Top",
        "default_price": "253.00",
        "created_at": "2021-02-23T04:22:44.937Z",
        "updated_at": "2021-02-23T04:22:44.937Z",
        "features": [
          {
            "feature": "Green Leaf Certified",
            "value": null
          },
          {
            "feature": "Fabric",
            "value": "\"Cashmere\""
          }
        ]
      },
      averageRating: 5,
      commonFeatures: {}
    }
    this.toggleModalWindow = this.toggleModalWindow.bind(this);
  }

  componentDidMount() {
    this.retrieveProductStyle();
    this.retrieveProductInfo();
    this.getAverageRatings();
  }

  getAverageRatings() {
    const { productId } = this.props;
    axios
    .get(`/reviewdata/${productId}`)
    .then((response) => {
      this.convertAverageRateToStarRating(response.data.ratings);
    })
    .catch((error) => {
      console.log('Get product review failed...', error);
    })
  }

  setCurrentStyle() {
    const { productStyles } = this.state;
    const curr = productStyles.filter(style => style['default?']);
    this.setState({
      currentStyle: curr
    });
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
      .then(() => {
        this.setCurrentStyle();
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
      .then(() => {
        this.mergeFeatures();
      })
      .catch((error) => {
        console.log('Get product information failed...', error);
      })
  }

  convertAverageRateToStarRating(ratings) {
    let devider = 0;
    const total = Object.values(ratings).reduce((sum, rating, i) => {
      devider += Number.parseInt(rating, 10);
      return sum + (rating * (i + 1));
    }, 0);
    const average = total / devider;
    console.log(average);
    this.setState({
      averageRating: average
    })
  }

  displayPrice() {
    const {currentStyle} = this.state;
    if (currentStyle[0].sale_price) {
      return (
        <div>
          <span className="sale-price">
            {`$${currentStyle[0].sale_price}`}
          </span>
          <span className="original-price">
            {`$${currentStyle[0].original_price}`}
          </span>
        </div>
      );
    }
    return (
      <div>
        <span>
          {`$${currentStyle[0].original_price}`}
        </span>
      </div>
    );
  }

  mergeFeatures() {
    const {productInfo} = this.state;
    const {selectProductInfo} = this.props;
    const commonFeatures = {};
    selectProductInfo.features.forEach(item => {
      commonFeatures[item.feature] = {
        value1: item.value,
        value2: null
      };
    });
    productInfo.features.forEach(item => {
      if (commonFeatures[item.feature]) {
        commonFeatures[item.feature].value2 = item.value;
      } else {
        commonFeatures[item.feature] = {
          value1: null,
          value2: item.value
        };
      }
    });
    this.setState({
      commonFeatures
    });
  }

  render() {
    const { selectProductInfo, selectAnotherProduct } = this.props;
    const { window, productInfo, currentStyle, averageRating, commonFeatures } = this.state;
    return (
      <div className="productCard-container">
        <div className="productCard">
          <ActionButton toggleModalWindow={this.toggleModalWindow} />
          <PreviewImages currentStyle={currentStyle} selectAnotherProduct={selectAnotherProduct} productId={productInfo.id} />
          <div className="productInfo">
            <div>{productInfo.category}</div>
            <div>{productInfo.name}</div>
            <div>{this.displayPrice()}</div>
            <Stars rating={averageRating} />
          </div>
        </div>
        <ComparisonModal product1={selectProductInfo.name} product2={productInfo.name} commonFeatures={commonFeatures} window={window} toggleModalWindow={this.toggleModalWindow} />
      </div>
    );
  }
}

ProductCard.propTypes = {
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  productId: PropTypes.number.isRequired,
  selectAnotherProduct: PropTypes.func.isRequired
}

export default ProductCard;
