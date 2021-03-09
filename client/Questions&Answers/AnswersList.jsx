import React from 'react';
import PropTypes from 'prop-types';

import TextLink, { UserInfo } from './UserFeedback.jsx';

function Answerslist(props) {
  const { answers, answersView, toggleAccordian, postFeedback } = props;
  const view = (answersView ? "showAll-answers" : "showDefault-answers");

  return (
    <div className={view}>
      {answers.map((answer) => (
        <div
          key={answer.answer_id}
          className="view-answer"
        >
          <span className="answerText">
            <strong>A:  </strong>
            {answer.body}
          </span>
          <span className="answersFeedback">
            <UserInfo
              name={answer.answerer_name}
              date={answer.date}
            />
            {`   Helpful? `}
            <TextLink
              option={1}
              handler={() => postFeedback('answers', answer.id, 'helpful')}
            />
            {` (${answer.helpfulness})   |   `}
            {!answer.reported && (
            <TextLink
              option={0}
              handler={() => postFeedback('answers', answer.id, 'report')}
            />
          )}
          </span>
        </div>
      ))}
      {answers.length > 2 && (
      <span
        className='loadAnswers'
        name="answers"
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
  postFeedback: PropTypes.func.isRequired,
}

export default Answerslist;
