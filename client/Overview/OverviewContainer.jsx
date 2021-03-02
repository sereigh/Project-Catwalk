import React from 'react';

import ShowcaseImage from './ShowcaseImage.jsx';
import ShowcaseThumbnails from './ShowcaseThumbnails.jsx';
import FeaturedReviewLink from './FeaturedReviewLink.jsx';
import FeaturedProduct from './FeaturedProduct.jsx';
import StylePriceType from './StylePriceType.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartFormSize from './CartFormSize.jsx';
import CartFormQuantity from './CartFormQuantity.jsx';
import CartInserter from './CartInserter.jsx';
import DescriptionBanner from './DescriptionBanner.jsx';

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
    // const { selectProductId, selectProductInfo, retrieveSelectProductInfo } = this.props;

    return (
      <div className="overviewWidget">
        <div className="showcaseCarousel">
          <ShowcaseImage />
          <ShowcaseThumbnails />
        </div>
        <div className="showcaseSelection">
          <div className="areaItem">
            <FeaturedReviewLink />
            <FeaturedProduct />
          </div>
          <div className="areaStyle">
            <StylePriceType />
            <StyleSelector />
          </div>
          <div className="areaCart">
            <CartFormSize />
            <CartFormQuantity />
            <CartInserter />
          </div>
        </div>
        <div className="showcaseDescription">
          <DescriptionBanner />
        </div>
      </div>
    );
  }

}

export default OverviewContainer;