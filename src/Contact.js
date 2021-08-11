import React from 'react';

class Contact extends React.Component {
	render() {
		return (
			<div>
				<p className='Contact'>My email is {this.props.email} and {model}</p>
				<Elem />
			</div>
		)
	}
}

const model = 'piu piu';

function Elem(props) {
	return (
		<p>La la</p>
	);
};

export default Contact;