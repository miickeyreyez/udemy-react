### Create-react-app
npm install -g create-react-app
create-react-app my-app --scripts-version 1.1.5
my-app/ npm start

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

### 1. react-burger: React application