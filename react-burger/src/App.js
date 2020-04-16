import React, { Component } from 'react';

import Layout from './Components/Layout';
import BurgerBuilder from './Components/containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
