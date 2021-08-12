import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";

function Contact() {
		return (
			<Container>
				<Jumbotron>
					<Row>
						<Col>
							<p className='Contact'>My email is {email}</p>
						</Col>
					</Row>
				</Jumbotron>
			</Container>
		)
}

const email = 'eugene.stepnov@gmail.com';

export default Contact;