import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ShowcaseImage from './ShowcaseImage.jsx';
import FeaturedProduct from './FeaturedProduct.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartInserter from './CartInserter.jsx';
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

  setSelectStyleIndex(idValue) {
    // if ( idValue === undefined ) {
    if ( !idValue ) {
      idValue = 0
    }
    // if ( !idValue ) {
    //   this.setState({
    //     selectStyleIndex: 0
    //   })
    // }
    this.setState({
      selectStyleIndex: Number(idValue)
    })
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
    // const { selectProductId, selectProductInfo } = this.props;
    const { selectProductInfo, reviewData } = this.props;
    const { selectStyleIndex, selectStyleOptions, stylesLoaded } = this.state
    // console.log('OverviewC_render X:', X);
    if ( !stylesLoaded ) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <div className="overviewWidget">
        {/* <div className="styleTestingOnly">
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
        </div> */}
        <div className="showcaseCarousel">
          <ShowcaseImage
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
          />
        </div>
        <div className="showcaseSelection">
          <FeaturedProduct
            selectProductInfo={selectProductInfo}
            reviewData={reviewData}
          />
          <StyleSelector
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
          />
          <CartInserter
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
          />
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
  }).isRequired,
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
  reviewData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string
    }),
    characteristics: PropTypes.shape({
      Comfort: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Fit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Length: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Quality: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Size: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Width: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
    }),
  }).isRequired
}

export default OverviewContainer;
