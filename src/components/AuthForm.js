import React, {Component} from 'react';


export default class AuthForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			profileImageUrl: ''
		}
		props.history.listen(() => props.removeError());
	}
	
	handleChange = e => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	}
	
	handleSubmit = e => {
		e.preventDefault();
		const authType = this.props.signUp ? 'signup' : 'signin';
		this.props.onAuth(authType, this.state)
			.then(() => {
				this.props.history.push('/');
			})
			.catch(() => {
				return;
			});
	}
	
	render(){
		const {email, username, password, profileImageUrl} = this.state;
		const {heading, buttonText, signUp, errors} = this.props;

		return (
			<div>
				<div className='row justify-content-md-center text-center'>
					<div className='col-md-6'>
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && (
								<div className='alert alert-danger'>{errors.message}</div>
							)}
							<label htmlFor='email'>Email: </label>
							<input type='text' name='email' id='email' className='form-control' onChange={this.handleChange} value={email} />
							<label htmlFor='password'>Password: </label>
							<input type='password' name='password' id='password' className='form-control' onChange={this.handleChange} />
							
							{signUp && (
							<div>
								<label htmlFor='username'>Username: </label>
								<input type='text' name='username' id='username' className='form-control' onChange={this.handleChange} value={username} />
								<label htmlFor='profileImageUrl'>Profile Image Url: </label>
								<input type='text' name='profileImageUrl' id='profileImageUrl' className='form-control' onChange={this.handleChange} />

							</div>)}
							<button type='submit' className='btn btn-primary btn-block btn-lg'>{buttonText}</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}