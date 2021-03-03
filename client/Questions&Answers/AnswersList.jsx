import React from 'react';
import PropTypes from 'prop-types';

const Answerslist = ({answers}) => (
  <div className="answersList">
    {answers.map((answer) => (
      <div key={answer.id} className="answer">
        <span>
          <strong>A:  </strong>
          Some kind of answer.
        </span>
      </div>
    ))}
  </div>
);

Answerslist.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired
}

export default Answerslist;