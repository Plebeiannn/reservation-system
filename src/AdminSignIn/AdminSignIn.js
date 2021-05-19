import React from 'react';

class AdminSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adminEmail: '',
			adminPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({adminEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({adminPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://warm-shore-00390.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id){
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<div>
				<h1 className="f-subheadline tc mh2">SUPREMO BARBERS - STA. CRUZ</h1>
				<article className="br3 ba bg-black mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_in" className="ba b--transparent ph0 mh0">
						<legend className="f2 tc fw8 ph0 mh0 white">ADMIN LOGIN</legend>
						<div className="mt3">
							{/* <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label> */}
							<input className="b pa2 pl3 black input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="email" 
								name="email-address" 
								id="email-address"
								onChange={this.onEmailChange}
								placeholder="Admin Email"
							/>

						</div>
						<div className="mv3">
							{/* <label className="db fw6 lh-copy f6" htmlFor="password">Password</label> */}
							<input className="b pa2 pl3 input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="password" 
								name="password"  
								id="password"
								onChange={this.onPasswordChange}
								placeholder="Admin Password"
								/>
						</div>
						</fieldset>
						<div className="tc">
						<input onClick={() => onRouteChange('adminhome')}  /*onClick={this.onSubmitSignIn}*/ className="f6 b black ph3 br4 pv2 input-reset ba bg-moon-gray grow pointer" 
							type="submit" 
							value="Login"/>
						</div>
						<div className="lh-copy mt3">
							<p onClick={() => onRouteChange('signin')} className="f6 white underline link dim db pointer tc">User Sign In</p>
						</div>
					</div>
					</main>
				</article>		
			</div>
		);
	}
}

export default AdminSignIn;