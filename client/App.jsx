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
      selectProductId: 17763,
      selectProductInfo: [
        {"id":17763,"campus":null,"name":null,"slogan":null,"description":null,"category":null,"default_price":null,"created_at":null,"updated_at":null,
        "features": [{"feature":null,"value": null},{"feature":null,"value": null}]}
      ]
    };
    this.retrieveAllProductInfo = this.retrieveAllProductInfo.bind(this);
    this.retrieveSelectProductInfo = this.retrieveSelectProductInfo.bind(this);
  }

  componentDidMount() {
    this.retrieveAllProductInfo();
    this.retrieveSelectProductInfo();
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
      .then((response) => {
        this.setState({
          selectProductInfo: response.data
        })
      })
      .catch((error) => {
        console.log('Get product data by id failed...', error);
      })
  }

  render() {
    const { productId, productList, selectProductId, selectProductInfo } = this.state;
    // console.log('App_render productList:', productList);
    // console.log('App_render selectProductInfo:', selectProductInfo);
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
        <RelatedListContainer />
        <span>
          ---Questions Answers Widget---
          <br />
          <br />
        </span>
        <QuestionsAndAnswers />
        <span>
          ---Ratings Reviews Widget---
          <br />
          <br />
        </span>
        <RatingsAndReviews productId={productId || 1} productName={productList[0].name || 'placeholder'} />
      </div>
    );
  }

}

export default App;
