import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import { useTranslation, Trans } from 'react-i18next';
import me from './me.jpg'

function App () {

	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (

		<Container>
			<button onClick={() => changeLanguage('en')}>en</button>
			<button onClick={() => changeLanguage('de')}>de</button>
			<Jumbotron>
				<Row>
					<Col>
						<p><Trans>I am a Product Owner at <a href='flatlogic.com'>Flatlogic.com</a>. The company creates templates on top of Javascript technologies and help to integrate these dashboards into existing products. During 3 years we grow our customer base over the 70k users and have almost 100k monthly visitors on our website.</Trans></p>
						<p><Trans>Previously I was a co-founder of Kuoll, an error analytics platform for e-commerce. Together with my partner, I went from MVP to the first paid users and increased the user base from 100 to more than 750, which included learning programming, product management, marketing and sales, user support.</Trans></p>
						<p><Trans>Before founding Kuoll I was an Audit Staff at Ernst & Young where I helped analyze data and business, perform general substantive audit procedures for Fortune 5000 companies.</Trans></p>
						<p><Trans>I was fortunate enough to be alumni of one of the largest startup accelerators in Nordic and Baltic states, Startup Sauna and Starta Accelerator in New York. Now, I am also receiving BA in Computer Science at University of London. I also love running, cycling, my wife Yuliya and daughter Sasha.</Trans></p>
					</Col>
					<Col>
						<img src={me} alt="Eugene Stepnov" id="me" />
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	)
}

export default App;
