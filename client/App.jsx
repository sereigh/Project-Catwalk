import React from 'react';

import ReviewsListContainer from './Rating&Reviews/ReviewsListContainer.jsx';
import QuestionsAndAnswers from './Questions&Answers/QuestionsAndAnswers.jsx';

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
        <RelatedItemsAndComparison />*/}
        <QuestionsAndAnswers />
        <ReviewsListContainer />
      </>
    );
  }
}

export default App;
