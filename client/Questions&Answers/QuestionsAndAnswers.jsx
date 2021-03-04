import React from 'react';

import QuestionsList from './QuestionsList.jsx';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import questions from './questions.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportOption: 0,
    };
  }

  componentDidMount() {
    // GET questions
  }


  render() {

    const {reportOption} = this.state;

    // const addToDatabase = (url, cb) => {

    // }

    return (
      <div className="qaContainer" style={{ border: 'solid black thin' }}>
        Container
        <div className="qaHeader" style={{ border: 'solid black thin' }} />
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
        </div>
        {questions && <QuestionsList questions={questions} reportOption={reportOption} />}
      </div>
    );
  }
};

export default QuestionsAndAnswers;
