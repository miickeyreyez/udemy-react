### Create-react-app
```
npm install -g create-react-app
create-react-app my-app --scripts-version 1.1.5
my-app/ npm start
```

### --scripts-version
These scripts impact in the folder structure

### props
Pass data from a parent to a child. Wrapping => embedded

### state
Pass data down the component tree

### Functional components
```
const funcComponent  = () => <div> Hello world! </div>
```

### Class components
```
class ClassComponent {
	render {
		return <div> Hello world! </div>;
	}
}
```

### State components
Handle state

### Stateless components
Does not handle state (presentational components)

### Pure components
Use automatically shouldComponentUpdate()

### HOC
Extended functionallity component
Works as a wrapper (props.children)

### useState hook
Adds functionallity to func components
This hooks replaces state instead of merging
You cand handle multiple states, and updated by properties
```
import { useState } from 'react';
...
const [personState, setPersonState] = useState({
	persons: [{ name: 'Angel' }], // The first argument is the state
})
...
const personHandler = () => setPersomState({ persons: [{ name: 'Miguel' }] })
< Person name={personState[0].name}>
...
<button onClick={personHandler} />
```

### Binding information 
```
// Reference
onClick={this.handleClick}

// Binding
onClick={this.handleClick.bind(this, value to pass)}

// Anonymous function
onClick={() => this.handleClick.bind(value to pass)}
```

### Styles with stylesheets (CSS file)
This features is possible by Webpack which adds the style to the components
```
import './Styles.css';
...
<div className="Person">
```

### Inline styles
```
const style = {};
...
<button style={style}>
```

### Style components
Note: Style components must be installed
```
const StyledButton = styled.button``
...
<StyledButton />
```
### CSS modules
In webpack is config by the 'css-loader'
```
options: {
	importLoaders: 1,
	modules: true,
	localIdentName: '[name]__[local]__[hash:base64:5]'
}
```
In the component
```
import classes from 'Styles.modules.css';
...
<button className={classes.Button}>
```

### PropTypes
Check properties integrity
```
import PropTypes from 'prop-types';
....
class Person extends Component {
	...
}

Person.propTypes = {
	name: PropTypes.string.isRequired
};

export default Person;
```

### Router
```
react-router
react-router-dom

...

App.js

import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename=''>
  <App />
</BrowserRouter>

...

Component.js

import { Route, Link, NavLink } from 'react-router-dom';

<Route path='/' exact render={() => <div>Hello world!</div>}>
<Route path='/' exact component={MyComponent}>

<Link to='/'>Home</Link>
<NavLink activeClass='active' activeStyle={{}} to='/'>Home</Link>
<Link to={{
  pathname: '/new-post',
  hash: '#submit,
  search: '?quick-submit=true',
}}>
  Posts
</Link>

<Switch> // To only use one router
<Redirect from='a' to='b'> // Redirect user actions

...

-- This will be usufel to get Router props (or copy parent props with spread operator)

Post.js

import { withRouter } from 'react-router-dom';

export default withRouter(Post);

```

### Redux
Store app state
```
redux

....

redux-basics.js

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {}

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
}

// Store
const store = createStore(rootReducer);
// To check the store: store.getState();

// Subscription
store.subscribe(() => {
  console.log('[Subscription'], store.getState());
});

// Dispatching Action
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
store.dispatch({ type: 'INC_COUNTER', payload: {} });

```

Setting up redux in an application

```
redux
react-redux

...

App.js

import { createStore, combineReducer } from 'redux';
import { Provider } from 'react-redux';
import { ctr, res } from './store/reducer';

onst rootReducer = combineReducers({
  ctr,
  res,
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

React.render(app, ...);

...

store/reducer.js

const initialState = {};

const reducer = (state, action) => {
  if(action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.result,
    }
  }
  return state;
}

export default reducer;

...

Counter.js

import { connect } from 'react-redux';

...

class Counter extends Component {
  ...
  <button onClick={() => this.props.onIncrementCounter(this.props.ctr)} />
  ...
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: (result) => dispatch({ type: 'INCREMENT' result }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```

### Redux Advanced
Middleware

```
index.js

import { applyMiddleware } from 'react-redux';

...

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      cont result = next(action);
      console.log('[Middleware] nrex state', store.getState());
      return result;
    }
  }
}

...

const store = createStore(rootReducer, applyMiddleware(logger));

```

Redux-thunk

```
redux-thunk

...

index.js

import thunk from 'react-thunk';

...

const store = createStore(rootReducer, applyMiddleware(thunk));

...

actions.js

...

return function(val) {
  setTimeout(() => {
    dispatch({ action" 'SOME_ACTION', val })
  }, 2000);
}

```

Action creators

```
actions.js

...

export const storeResult =  (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().counter;
      dispatch(saveResult(++oldCounter))
    });
  }
}

```

### Tests

```
jest - Test runner which executes tests and provides validation library
enzyme - Testing utilities which simultas the react app, allow dig into the DOM
```

### Deployment

```
Basepath => <BrowserRouter basename='/my-app' />
Build & optimize project => npm run build
Always serve index.html => ensures router works correctly
Upoload build artifacts to server => build folder
```

## Webpack

```
Bundle that analyzes connections and bundles to optimize everything
Multiple entry points => entry
File type transformation => Loaders
Global transformation => Plugins
Correctly concatenated and ordered output => output
```

### 1. react-burger: React application
### 2. next-app: Demo Next.js