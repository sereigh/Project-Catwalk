import React, { useState } from 'react';

// import PropTypes from 'prop-types';

import QAFeedback from './QAFeedback.jsx';
// import Test from './Test.jsx';
// eslint-disable-next-line import/extensions
import answers from './answers.js';

function Answerslist() {

  const [status, setStatus] = useState('Report');
  const [expand, setExpansion] = useState('showDefault-answers');

  const toggleStatus = () => (
    setStatus('Reported')
  );

  const toggleExpansion = () => {
    if (expand === 'showDefault-answers') {
      return setExpansion('showAll-answers');
    }
    return setExpansion('showDefault-answers');
  };

  return (

    <div className={expand}>
      {answers.map((answer) => (
        <div key={answer.answer_id} className="view-answer">
          <div className="answerText">
            <strong>A:  </strong>
            {answer.body}
          </div>
          <br />
          <div className="answersFeedback">
            <span className="answersFeedback-left">
              by
              {' '}
              {answer.answerer_name}
              {' '}
              {answer.date}
              {' '}
              |
            </span>
            {' '}
            <span className="answersFeedback-right">
              {status === 'Report' ?
                <QAFeedback option={0} handleFeedback={toggleStatus} />
              : <QAFeedback option={1} handleFeedback={() => { console.log('This answer has already been reported.') }} />}
            </span>
          </div>
        </div>
      ))}
      <span
        className="loadAnswers"
        onClick={() => toggleExpansion()}
        role="button"
        tabIndex={0}
        onKeyPress={() => toggleExpansion()}
      >
        LOAD MORE ANSWERS
      </span>
    </div>
  );
}

Answerslist.propTypes = {
  // answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired
}

export default Answerslist;