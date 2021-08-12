import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

		return (
			<Container>
				<Jumbotron>
						<Router>

							<Link to='/About' id='about'>About</Link>
							<Switch>
								<Route path='/About'>
									<About />
								</Route>
							</Switch>

							{/*<Link to='/Contact' id="contact">Contact</Link>
							<Switch>
								<Route path='/Contact'>
									<Contact />
								</Route>
							</Switch>*/}

						</Router>

				</Jumbotron>
			</Container>
		)
}

export default App;
