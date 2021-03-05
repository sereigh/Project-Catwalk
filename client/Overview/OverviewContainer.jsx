import React from 'react';
// import PropTypes from 'prop-types';

// import ShowcaseImage from './ShowcaseImage.jsx';
// import ShowcaseThumbnails from './ShowcaseThumbnails.jsx';
// import FeaturedReviewLink from './FeaturedReviewLink.jsx';
// import FeaturedProduct from './FeaturedProduct.jsx';
// import StylePriceType from './StylePriceType.jsx';
// import StyleSelector from './StyleSelector.jsx';
// import CartFormSize from './CartFormSize.jsx';
// import CartFormQuantity from './CartFormQuantity.jsx';
// import CartInserter from './CartInserter.jsx';
// import DescriptionBanner from './DescriptionBanner.jsx';

// App.jsx provides props:
//   selectProductId={selectProductId}
//   selectProductInfo={selectProductInfo}
//   retrieveSelectProductInfo={this.retrieveSelectProductInfo}

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { selectProductId } = this.props;
    // const { selectProductId, selectProductInfo, retrieveSelectProductInfo } = this.props;
    // console.log('OverviewContainer_render selectProductID', selectProductId);
    // console.log('OverviewContainer_render selectProductInfo', selectProductInfo);
    // console.log('OverviewContainer_render retrieveSelectProductInfo', retrieveSelectProductInfo);
    return (
      <div className="overviewWidget">
        {/* <div className="showcaseCarousel">
          <ShowcaseImage />
          <ShowcaseThumbnails />
        </div> */}
        <div className="showcaseSelection">
          {/* <div className="areaItem">
            <FeaturedReviewLink />
            <FeaturedProduct />
          </div> */}
          <div className="areaStyle">
            {/* <StylePriceType
              selectProductId={selectProductId}
            /> */}
            {/* <StyleSelector /> */}
          </div>
          {/* <div className="areaCart">
            <CartFormSize />
            <CartFormQuantity />
            <CartInserter />
          </div> */}
        </div>
        {/* <div className="showcaseDescription">
          <DescriptionBanner />
        </div> */}
      </div>
    );
  }

}

// OverviewContainer.propTypes = {
  // selectProductId: PropTypes.number.isRequired
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
// }

export default OverviewContainer;

// "Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. Check the render method"
