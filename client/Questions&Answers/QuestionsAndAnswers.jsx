import React from 'react';

import QuestionsList from './QuestionsList.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    };
  }

  render() {
    const {view} = this.state;
    const toggleView = (e) => { this.setState({ view: !view }) };
    return (
      <div className="qaContainer" style={{ border: 'solid black thin' }}>
        Container
        <div className="qaHeader" style={{ border: 'solid black thin' }}>
          Header
        </div>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
        </div>
        <QuestionsList toggleView={toggleView}/>
      </div>
    );
  }
};

export default QuestionsAndAnswers;
