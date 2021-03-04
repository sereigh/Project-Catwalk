// c import ShowcaseImage from './ShowcaseImage.jsx';
// f import ShowcaseThumbnails from './ShowcaseThumbnails.jsx';
// f import FeaturedReviewLink from './FeaturedReviewLink.jsx';
// c import FeaturedProduct from './FeaturedProduct.jsx';
// f import StylePriceCategory from './StylePriceCategory.jsx';
// c import StyleSelector from './StyleSelector.jsx';
// f import CartFormSize from './CartFormSize.jsx';
// f import CartFormQuantity from './CartFormQuantity.jsx';
// c import CartInserter from './CartInserter.jsx';
// c import DescriptionBanner from './DescriptionBanner.jsx';

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// import ShowcaseImage from './ShowcaseImage.jsx';
// import FeaturedProduct from './FeaturedProduct.jsx';
// import StyleSelector from './StyleSelector.jsx';
// import CartInserter from './CartInserter.jsx';
// import DescriptionBanner from './DescriptionBanner.jsx';

class OverviewContainer extends React.Component {
  // selectProductId={selectProductId} viaApp
  // selectProductInfo={selectProductInfo} viaApp
  // retrieveSelectProductInfo={this.retrieveSelectProductInfo} viaApp
  constructor(props) {
    super(props);
    this.state = {
      selectStyleResultsIndex: 0,
      selectStyleOptions: [
        {"product_id":"17763",
          "results":[
            {"style_id":94747,"name":null,"original_price":null,"sale_price":null,"default?":true,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}},
            {"style_id":94748,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}},
            {"style_id": 94749,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}}
          ]
        }
      ]
    };
    this.setSelectStyleResultsIndex = this.setSelectStyleResultsIndex.bind(this);
    this.retrieveSelectStyleOptions = this.retrieveSelectStyleOptions.bind(this);
  }

  componentDidMount() {
    this.setSelectStyleResultsIndex();
    this.retrieveSelectStyleOptions();
  }

  setSelectStyleResultsIndex() {
    //   // const { selectProductId } = this.props;
    //   // const { selectStyleIndex } = this.state;
  }

  retrieveSelectStyleOptions() {
    const { selectProductId } = this.props;
    console.log('OverviewC_retrieveSelectStyleOptions selectProductId:', selectProductId);
    axios
      .get(`/products/${selectProductId}/styles`)
      // .get(`/products/17764/styles`)
      .then((response) => {
        // console.log('OverviewC_retrieveSelectStyleOptions response:', response);
        // console.log('OverviewC_retrieveSelectStyleOptions response.data:', response.data);
        // console.log('OverviewC_retrieveSelectStyleOptions response.data.results:', response.data.results);
        this.setState({
          selectStyleOptions: response.data
        })
        this.componentDidMount()
      })
      .catch((error) => {
        console.log('Get product style options failed...', error);
      })
  }

  render() {
    // const { selectProductId, selectProductInfo, retrieveSelectProductInfo } = this.props;
    // const { selectProductId } = this.props;
    // console.log('OverviewC_render selectProductID:', selectProductId);
    // console.log('OverviewC_render selectProductInfo:', selectProductInfo);
    // console.log('OverviewC_render retrieveSelectProductInfo():', retrieveSelectProductInfo);
    const { selectStyleOptions, selectStyleResultsIndex } = this.state
    console.log('OverviewC_render selectStyleOptions:', selectStyleOptions);
    console.log('OverviewC_render selectStyleResultsIndex:', selectStyleResultsIndex);
    return (
      <div className="overviewWidget">
        <div className="showcaseCarousel">
          {/* <ShowcaseImage /> */}
        </div>
        <div className="showcaseSelection">
          {/* <FeaturedProduct /> */}
          {/* <StyleSelector /> */}
          {/* <CartInserter /> */}
        </div>
        <div className="showcaseDescription">
          {/* <DescriptionBanner /> */}
        </div>
      </div>
    );
  }

}

OverviewContainer.propTypes = {
  selectProductId: PropTypes.number.isRequired
  // selectProductInfo: PropTypes.arrayOf(PropTypes.shape({
  //   "id": PropTypes.number,
  //   "campus": PropTypes.string,
  //   "name": PropTypes.string,
  //   "slogan": PropTypes.string,
  //   "description": PropTypes.string,
  //   "category": PropTypes.string,
  //   "default_price": PropTypes.string,
  //   "created_at": PropTypes.string,
  //   "updated_at": PropTypes.string
  // })).isRequired,
  // retrieveSelectProductInfo: PropTypes.func.isRequired
}

export default OverviewContainer;
