import React from 'react';

import PropTypes from 'prop-types';

import Feedback, { UserInfo } from './UserFeedback.jsx';

function Answerslist(props) {

  const { answers, answersView, toggleAccordian } = props;
  const view = (answersView ? "showAll-answers" : "showDefault-answers");

  return (

    <div className={view}>
      {answers.map((answer) => (
        <div key={answer.answer_id} className="view-answer">
          <span className="answerText">
            <strong>A:  </strong>
            {answer.body}
          </span>

          <div className="answersFeedback">
            <span className="answersFeedback-left">
              <UserInfo name={answer.answerer_name} seller={false} date={answer.date} />
            </span>
            <span className="answersFeedback-right">
              <Feedback option={answer.reported ? 1 : 0} helpfulness={answer.helpfulness} handler={()=> console.log('answer feedback clicked')} />
            </span>
          </div>
        </div>
      ))}
      {answers.length > 2 && (
      <span
        name='answers'
        onClick={() => {toggleAccordian()}}
        role="button"
        tabIndex={0}
        onKeyPress={() => {toggleAccordian()}}
      >
        LOAD MORE ANSWERS
      </span>
    )}
    </div>
  );
}

Answerslist.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleAccordian: PropTypes.func.isRequired,
}

export default Answerslist;
