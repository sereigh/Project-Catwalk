import React from 'react';

import SendFeedback from './SendFeedback.jsx';
import QuestionsList from './QuestionsList.jsx';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import questions from './questions.js';

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
        <div className="qaHeader" style={{ border: 'solid black thin' }} />
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
          <SendFeedback option={1} />
        </div>
        {questions && <QuestionsList questions={questions} />}
      </div>
    );
  }
};

export default QuestionsAndAnswers;
