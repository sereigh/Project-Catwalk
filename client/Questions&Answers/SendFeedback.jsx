import React from 'react';
import PropTypes from 'prop-types';


class SendFeedback extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const options = ['Yes', 'Report'];
    const handleFeedback = () => { console.log('click') }
    const { option } = this.props;
    return (
      <div
        onClick={handleFeedback}
        onKeyPress={handleFeedback}
        role="button"
        tabIndex={0}
      >
        <p>
          Helpful?
          {' '}
          <u>Yes</u>
          (0)
          |
          {' '}
          <u>{options[option]}</u>
        </p>
      </div>
    )
  }
}

// const messageFeedback = (Component) => {
//   return class extends React.Component {
//     render() {
//       return (

//       )
//     }
//   }
// }

// function SendFeedback(Component) {
//   const { handleClick } = props;
//   return class extends React.Component {
//     render() {
//       return (
//         <Component
//           onClick={handleClick}
//         />
//       );
//     }
//   }
// }

// export const Test = SendFeeback(Hello);

// export const MarkHelpful = ({ text, onClick }) => (
//   <div
//     onClick={onClick}
//     onKeyPress={onClick}
//     role="button"
//     tabIndex={0}
//   >
//     {text}
//   </div>
// );

// export const MessageFeedback = SendFeedback(MarkHelpful('Yes', { handleFeedback: () => console.log('clicked') }));

SendFeedback.propTypes = {
  option: PropTypes.number.isRequired,
}

export default SendFeedback;
