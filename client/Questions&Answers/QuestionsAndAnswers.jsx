import React from 'react';

import QuestionsList from './QuestionsList.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="qaContainer" style={{ border: 'solid black thin' }}>
        Container
        <div className="qaHeader" style={{ border: 'solid black thin' }}>
          Header
        </div>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
        </div>
        <QuestionsList />
      </div>
    );
  }
};

export default QuestionsAndAnswers;
