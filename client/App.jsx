import React from 'react';
import Axios from 'axios';
import Overview from './Overview/Overview'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: {},
      productId: 1
      selectProductId: 1,
      selectProductInfo: {}
    };
    this.retrieveAllProductInfo = this.retrieveAllProductInfo.bind(this);
    this.retrieveSelectProductInfo = this.retrieveSelectProductInfo.bind(this);
  }

  retrieveAllProductInfo() {
    axios
      .get(`/product`)
      .then((data) => {
        this.setState({
          productList: data
        })
      })
      .catch((error) => {
        console.log('Get total product list failed...', error);
      })
  }

  retrieveSelectProductInfo() {
    axios
      .get(`/product/${this.state.selectProductId}`)
      .then((data) => {
        this.setState({
          selectProductInfo: data
        })
      })
      .catch((error) => {
        console.log('Get product data by id failed...', error);
      })
  }

  componentDidMount() {
    this.retrieveSelectProductInfo();
    this.retrieveAllProductInfo();
  }

  render() {
    return (
      <div>
        <span>Hello, world!</span>
        <p>{this.state.selectProductId}</p>
        <br></br>
        <p>{this.state.selectProductInfo}</p>
        {/* <Overview /> */}
        {/* <RelatedItemsAndComparison /> */}
        {/* <QuestionsAndAnswers /> */}
        {/* <RatingsAndReviews /> */}
      </div>
    );
  }
}

export default App;
