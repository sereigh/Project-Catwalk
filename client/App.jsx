import React from 'react';
import axios from 'axios';

import OverviewContainer from './Overview/OverviewContainer.jsx';
import QuestionsAndAnswers from './Questions&Answers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './Rating&Reviews/RatingsAndReviews.jsx';
import RelatedListContainer from './RelatedItems&Comparison/RelatedListContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 17762,
      productList: [
        {"id":17762,"campus":null,"name":null,"slogan":null,"description":null,"category":null,"default_price":null,"created_at":null,"updated_at":null}
      ],
      selectProductId: 17762,
      selectProductInfo: {
        "id":17762,"campus":null,"name":null,"slogan":null,"description":null,"category":null,"default_price":null,"created_at":null,"updated_at":null,
        "features": [{"feature":null,"value": null},{"feature":null,"value": null}]
      },
      productSpecificsLoaded: false,
      reviewData: {
        product_id: '1',
        ratings: {
          1: '0',
          2: '0',
          3: '0',
          4: '0',
          5: '0'
        },
        recommended: {
          false: '0',
          true: '0'
        },
        characteristics: {}
      },
      totalReviews: 1
    };
    this.retrieveAllProductInfo = this.retrieveAllProductInfo.bind(this);
    this.retrieveSelectProductInfo = this.retrieveSelectProductInfo.bind(this);
    this.selectAnotherProduct = this.selectAnotherProduct.bind(this);
    this.retrieveReviewData = this.retrieveReviewData.bind(this);
  }

  componentDidMount() {
    this.retrieveAllProductInfo();
    this.retrieveSelectProductInfo();
    this.retrieveReviewData();
  }

  retrieveAllProductInfo() {
    axios
      .get(`/products`)
      .then((response) => {
        this.setState({
          productList: response.data
        })
      })
      .catch((error) => {
        console.log('Get total product list failed...', error);
      })
  }

  retrieveSelectProductInfo() {
    const { selectProductId } = this.state;
    axios
      .get(`/products/${selectProductId}`)
      // .then((response) => {
      //   this.setState({
      //     selectProductInfo: response.data
      //   })
      // })
      .then((response) => {
        this.setState(() => {
          return {
            selectProductInfo: response.data
          }
        })
      })
      .then(() => {
        this.setState(
          () => {
            return {
              productSpecificsLoaded: true
            }
          }
        )
      })
      .catch((error) => {
        console.log('Get product data by id failed...', error);
      })
  }

  selectAnotherProduct(id) {
    this.setState({
      selectProductId: id
    });
    this.retrieveSelectProductInfo();
  }

  retrieveReviewData(callback = () => {}) {
    const {productId} = this.state;
    axios
      .get(`/reviewdata/${productId}`)
      .then((response) => {
        const totalReviews = parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10);
        this.setState({
          reviewData: response.data,
          totalReviews
        });
        callback();
      })
      .catch((error) => {
        console.log(callback)
        console.log('Get review data failed...', error);
      })
  }

  render() {
    const { productId, productList, selectProductId, selectProductInfo, productSpecificsLoaded, reviewData, totalReviews } = this.state;
    // console.log('App_render X:', X);
    if ( !productSpecificsLoaded ) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <div>
        <span>::: FEC-ELLIS :::</span>
        <p>
          <a href="http://localhost:3000/products">
            localhost:3000/products
          </a>
          <br />
          productId:&nbsp;
          {productId}
          <br />
          productList[0].name:&nbsp;
          {productList[0].name}
        </p>
        <p>
          <a href="http://localhost:3000/products/17763/">
            localhost:3000/products/
            {selectProductId}
          </a>
          <br />
          selectProductId:&nbsp;
          {selectProductId}
          <br />
          selectProductInfo.feature[1].feature:&nbsp;
          {selectProductInfo.category}
        </p>
        <span>
          ---Overview Widget---
          <br />
          <br />
        </span>
        <OverviewContainer
          selectProductId={selectProductId}
          selectProductInfo={selectProductInfo}
          retrieveSelectProductInfo={this.retrieveSelectProductInfo}
        />
        <span>
          ---Related List Widget---
          <br />
          <br />
        </span>
        <RelatedListContainer selectProductId={selectProductId} selectProductInfo={{name: selectProductInfo.name, features: selectProductInfo.features}} selectAnotherProduct={this.selectAnotherProduct} />
        <span>
          ---Questions Answers Widget---
          <br />
          <br />
        </span>
        <QuestionsAndAnswers productId={productId} />
        <span>
          ---Ratings Reviews Widget---
          <br />
          <br />
        </span>
        <RatingsAndReviews productId={productId || 1} productName={productList[0].name || 'placeholder'} reviewData={reviewData} totalReviews={totalReviews} retrieveReviewData={this.retrieveReviewData} />
      </div>
    );
  }

}

export default App;
