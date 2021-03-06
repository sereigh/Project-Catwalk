import React, { useState } from 'react';

import PropTypes from 'prop-types';

import QAFeedback from './QAFeedback.jsx';

function Answerslist(props) {

  const [status, setStatus] = useState('Report');
  const [expand, setExpansion] = useState('showDefault-answers');
  const { answers, answersView, toggleView } = props;

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

    <div className='showDefault-answers'>
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
              <QAFeedback option={answer.reported ? 1 : 0} helpfulness={answer.helpfulness} />
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
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  // handleFeedback: PropTypes.func.isRequired
}

export default Answerslist;