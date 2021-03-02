import React from 'react';
import axios from 'axios';

import RatingsAndReviews from './Rating&Reviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './Questions&Answers/QuestionsAndAnswers.jsx';
import RelatedListContainer from './RelatedItems&Comparison/RelatedListContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {"id":17762,"campus":null,"name":null,"slogan":null,"description":null,"category":null,"default_price":null,"created_at":null,"updated_at":null}
      ],
      productId: 17762,
      selectProductId: 17762,
      selectProductInfo: [
        {"id":17762,"campus":null,"name":null,"slogan":null,"description":null,"category":null,"default_price":null,"created_at":null,"updated_at":null}
      ]
    };
    this.retrieveAllProductInfo = this.retrieveAllProductInfo.bind(this);
    this.retrieveSelectProductInfo = this.retrieveSelectProductInfo.bind(this);
  }

  componentDidMount() {
    this.retrieveSelectProductInfo();
    this.retrieveAllProductInfo();
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
    const { selectProductId } = this.state;
    const { selectProductInfo } = this.state;
    const { productId } = this.state;
    const { productList } = this.state;
    console.log('render selectProductInfo:', selectProductInfo);
    return (
      <div>
        <span>Hello, world!</span>
        <p>{selectProductId}</p>
        <br />
        <p>{selectProductInfo[0].category}</p>
        <br />
        <p>{productId}</p>
        <br />
        <p>{productList[0].category}</p>
        {/* <Overview /> */}
        <RelatedListContainer />
        <QuestionsAndAnswers />
        <RatingsAndReviews productId={productId} />
      </div>
    );
  }
}

export default App;
