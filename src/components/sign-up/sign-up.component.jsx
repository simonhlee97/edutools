import React from 'react';
import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: '', password: '' })
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState( { [name]: value } )
	}

	render() {
		return (
			<div className='sign-up'>
				<h2>I don't have an account</h2>
				<span>Sign up with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input 
						name='email' 
						type="email" 
						onChange={this.handleChange}
						value={this.state.email} 
						required 
					/>
					<label>Email</label>

					<input 
						name='password' 
						type="password" 
						onChange={this.handleChange}
						value={this.state.password} 
						required 
					/>
					<label>Password</label>

					<input type="submit" value='Submit Form' />
				</form>
			</div>
		);
	}
}

export default SignUp;
