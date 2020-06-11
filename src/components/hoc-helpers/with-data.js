import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      hasError: false
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    componentDidCatch() {
      this.setState({hasError: true});
    };

    render() {
      const { data, hasError } = this.state;

      if (hasError) {
        return <ErrorIndicator/>;
      }
      
      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
