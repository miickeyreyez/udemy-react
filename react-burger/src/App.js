import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import Auth from './Components/containers/Auth';
import BurgerBuilder from './Components/containers/BurgerBuilder';
import Checkout from './Components/containers/Checkout';
import Orders from './Components/containers/Orders';
import Logout from './Components/containers/Auth/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
