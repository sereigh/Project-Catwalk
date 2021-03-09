import React from 'react';
import axios from 'axios';

const withClickTracker = WrappedComponent => {
  class WithClickTracker extends React.Component {
    handleClickTrack(event) {
      const postBody = {
        element: event.target.toString(),
        widget: WrappedComponent.name,
        time: new Date().toString()
      }

      axios
        .post('/interactions', postBody)
        .then(results => console.log(results))
        .catch(error => console.log(error))
    }

    render() {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent {...this.props} handleClickTrack={this.handleClickTrack} />
      )
    }
  }

  return WithClickTracker;
}

export default withClickTracker;