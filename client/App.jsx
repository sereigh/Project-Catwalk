import React from 'react';

import ReviewsListContainer from './Rating&Reviews/ReviewsListContainer.jsx';
import RelatedListContainer from './RelatedItems&Comparison/RelatedListContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <span>Hello, world!</span> */}
        {/* <Overview />
        <QuestionsAndAnswers />*/}
        <RelatedListContainer />
        <ReviewsListContainer />
      </>
    );
  }
}

export default App;
