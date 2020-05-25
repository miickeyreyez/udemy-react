import React, { Component } from 'react';

class welcome extends Component {
  static async getInitialProps(context) {
    return Promise.resolve({ appName: 'Demo with Next.js' });
  }

  render() {
    return (
      <div>
        Welcome! { this.props.appName }
      </div>
    );
  }
}

export default welcome;
