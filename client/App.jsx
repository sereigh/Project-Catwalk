import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: {},
      productId: 1,
      selectProductId: 1,
      selectProductInfo: {}
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
    const { selectProductId } = this.state;
    axios
      .get(`/products/${selectProductId}`)
      .then((data) => {
        this.setState({
          selectProductInfo: data
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
    return (
      <div>
        <span>Hello, world!</span>
        <p>{selectProductId}</p>
        <br />
        <p>{selectProductInfo}</p>
        <br />
        <p>{productId}</p>
        <br />
        <p>{productList}</p>
        {/* <Overview /> */}
        {/* <RelatedItemsAndComparison /> */}
        {/* <QuestionsAndAnswers /> */}
        {/* <RatingsAndReviews /> */}
      </div>
    );
  }
}

export default App;
