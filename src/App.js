import React from 'react';
import Contact from './Contact';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
	render() {

		return (
			<div className="container">
				<Router>
					<Link to='/Contact'>Contact</Link>
					<Switch>
						<Route path='/Contact'>
							<Contact email='eugene.stepnov@gmail.com'/>
						</Route>
					</Switch>
					
					<Link to='/About' id='about'>About</Link>
					<Switch>
						<Route path='/About'>
							<About />
						</Route>
					</Switch>
					
				</Router>
			</div>
		)
	}	
}


export default App;
