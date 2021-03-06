import React from 'react';

import PropTypes from 'prop-types';

import { AnswersFeedback } from './QAFeedback.jsx';
import QAButton from './QAButton.jsx';

function Answerslist(props) {

  // const [status, setStatus] = useState('Report');
  // const [expand, setExpansion] = useState('showDefault-answers');
  const { answers, answersView, toggleView } = props;

  // const toggleStatus = () => (
  //   setStatus('Reported')
  // );

  // const toggleExpansion = () => {
  //   if (expand === 'showDefault-answers') {
  //     return setExpansion('showAll-answers');
  //   }
  //   return setExpansion('showDefault-answers');
  // };

  const view = (answersView === true ? "showAll-answers" : "showDefault-answers");

  return (

    <div className={view}>
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
              <AnswersFeedback option={answer.reported ? 1 : 0} helpfulness={answer.helpfulness} />
            </span>
          </div>
        </div>
      ))}
      {/* if more answers, load more answers */}
      {(answers.length > 3 && <QAButton text="LOAD MORE ANSWERS" handler={() => toggleView()} />)}
      {/* <span
        className="loadAnswers"
        name="answers"
        onClick={(e) => toggleView(e)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => toggleView(e)}
      >
        LOAD MORE ANSWERS
      </span> */}
    </div>
  );
}

Answerslist.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
}

export default Answerslist;