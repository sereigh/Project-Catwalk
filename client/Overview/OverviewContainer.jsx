// c import ShowcaseImage from './ShowcaseImage.jsx';
// f import ShowcaseThumbnails from './ShowcaseThumbnails.jsx';
// f import FeaturedReviewLink from './FeaturedReviewLink.jsx';
// c import FeaturedProduct from './FeaturedProduct.jsx';
// f import StylePrice from './StylePrice.jsx';
// f import StyleCategory from './StyleCategory.jsx';
// c import StyleSelector from './StyleSelector.jsx';
// f import CartFormSize from './CartFormSize.jsx';
// f import CartFormQuantity from './CartFormQuantity.jsx';
// c import CartInserter from './CartInserter.jsx';
// c import DescriptionBanner from './DescriptionBanner.jsx';

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// import ShowcaseImage from './ShowcaseImage.jsx';
import FeaturedProduct from './FeaturedProduct.jsx';
import StylePrice from './StylePrice.jsx';
import StyleSelector from './StyleSelector.jsx';
// import CartInserter from './CartInserter.jsx';
import DescriptionBanner from './DescriptionBanner.jsx';

class OverviewContainer extends React.Component {
  // selectProductId={selectProductId} viaApp
  // selectProductInfo={selectProductInfo} viaApp
  // retrieveSelectProductInfo={this.retrieveSelectProductInfo} viaApp
  constructor(props) {
    super(props);
    this.state = {
      // selectStyleOptions: [
      //   {"product_id":"17763",
      //     "results":[
      //       {"style_id":94747,"name":null,"original_price":null,"sale_price":null,"default?":true,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}},
      //       {"style_id":94748,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}},
      //       {"style_id": 94749,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}}
      //     ]
      //   }
      // ]
      selectStyleIndex: 0,
      selectStyleOptions: [],
      // selectStyleOptions: [
      //   {
      //     "style_id":94747,"name":null,"original_price":null,"sale_price":null,"default?":true,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}
      //   },
      //   {
      //     "style_id":94748,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}
      //   },
      //   {
      //     "style_id": 94749,"name":null,"original_price":null,"sale_price":null,"default?":false,"photos":[{"thumbnail_url":null,"url":null}],"skus":{"547962":{"quantity":null,"size":null}}
      //   }
      // ],
      stylesLoaded: false
    };
    this.setSelectStyleIndex = this.setSelectStyleIndex.bind(this);
    this.retrieveSelectStyleOptions = this.retrieveSelectStyleOptions.bind(this);
  }

  componentDidMount() {
    this.setSelectStyleIndex();
    this.retrieveSelectStyleOptions();
  }

  setSelectStyleIndex() {
    //   // const { selectProductId } = this.props;
    //   // const { selectStyleIndex } = this.state;
  }

  retrieveSelectStyleOptions() {
    const { selectProductId } = this.props;
    axios
      .get(`/products/${selectProductId}/styles`)
      .then((response) => {
        this.setState(
          () => {
            return {
              selectStyleOptions: response.data.results
            }
          }
        )
      })
      .then(() => {
        this.setState(
          () => {
            return {
              stylesLoaded: true
            }
          }
        )
      })
      .catch((error) => {
        console.log('Get product style options failed...', error);
      })
  }

  render() {
    const { selectProductId, selectProductInfo } = this.props;
    const { selectStyleIndex, selectStyleOptions, stylesLoaded } = this.state
    // console.log('OverviewC_render X:', X);
    if ( !stylesLoaded ) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <div className="overviewWidget">
        <a href="http://localhost:3000/products/17763/styles/">
          localhost:3000/products/
          {selectProductId}
          /styles
        </a>
        <br />
        selectStyleOptions[0].name:&nbsp;
        {selectStyleOptions[0].name}
        <br />
        selectStyleIndex:&nbsp;
        {selectStyleIndex}
        <br />
        <br />
        <div className="showcaseCarousel">
          {/* <ShowcaseImage /> */}
        </div>
        <div className="showcaseSelection">
          <FeaturedProduct
            selectProductInfo={selectProductInfo}
          />
          <StylePrice
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
          />
          <StyleSelector
            selectStyleOptions={selectStyleOptions}
            retrieveSelectStyleOptions={this.retrieveSelectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
          />
          {/* <CartInserter /> */}
        </div>
        <div className="showcaseDescription">
          <DescriptionBanner
            selectProductInfo={selectProductInfo}
          />
        </div>
      </div>
    );
  }

}

OverviewContainer.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  // selectProductInfo: PropTypes.arrayOf(PropTypes.shape({
  // selectProductInfo: PropTypes.objectOf(PropTypes.shape({
  selectProductInfo: PropTypes.shape({
    "id": PropTypes.number,
    "campus": PropTypes.string,
    "name": PropTypes.string,
    "slogan": PropTypes.string,
    "description": PropTypes.string,
    "category": PropTypes.string,
    "default_price": PropTypes.string,
    "created_at": PropTypes.string,
    "updated_at": PropTypes.string,
    "features": PropTypes.arrayOf(PropTypes.shape({
      "feature": PropTypes.string,
      "value": PropTypes.string,
      "map": PropTypes.node
    }))
  }).isRequired
  // stylesLoaded: PropTypes.bool.isRequired
  // retrieveSelectProductInfo: PropTypes.func.isRequired
  // selectStyleOptions: PropTypes.arrayOf(PropTypes.shape({
  //   "style_id": PropTypes.number,
  //   "name": PropTypes.string,
  //   "original_price": PropTypes.string,
  //   "sale_price": PropTypes.string,
  //   "default?": PropTypes.bool,
  //   "photos": PropTypes.arrayOf(PropTypes.shape({
  //     "thumbnail_url": PropTypes.string,
  //     "url": PropTypes.string,
  //   })),
  //   "skus": PropTypes.objectOf(PropTypes.shape({
  //     "547962": PropTypes.arrayOf(PropTypes.shape({
  //       "quantity": PropTypes.number,
  //       "size": PropTypes.string,
  //     }))
  //   }))
  // })).isRequired
}

export default OverviewContainer;
