import React from 'react';

// import PropTypes from 'prop-types';
import SendFeedback from './SendFeedback.jsx';
import Test from './Test.jsx';
// eslint-disable-next-line import/extensions
import answers from './answers.js';

function Answerslist() {

  return (
    <div className="answersList">
      {answers.map((answer) => (
        <div key={answer.answer_id} className="answer">
          <div className="answerText">
            <strong>A:  </strong>
            {answer.body}
          </div>
          <Test />
          <SendFeedback option={1} />
        </div>
    ))}
    </div>
);
    }

// Answerslist.propTypes = {
//   answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired
// }

export default Answerslist;