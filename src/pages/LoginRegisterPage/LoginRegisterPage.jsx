import React, { Component, } from 'react';
import { withRouter } from 'react-router-dom';
import UserIcon from "../../assets/UserIcon.svg";
import PasswordIcon from "../../assets/PasswordIcon.svg";
import Btn from "../../assets/Btn.svg";
import BtnBlank from "../../assets/BtnBlank.svg";
import BtnReg from "../../assets/BtnReg.svg";
import BtnBlankReg from "../../assets/BtnBlankReg.svg";
import './LoginRegisterPage.css'


class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			accessToken: '',
		};
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);

	}

	handleChangeUsername(event) {
		this.setState({
			username: event.target.value
		})
	}

	handleChangePassword(event) {
		this.setState({
			password: event.target.value
		})
	}

	handleClick(event) {
		var apiBaseUrl = "https://movies-app-siit.herokuapp.com/auth/"
		const payload = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				'username': this.state.username,
				'password': this.state.password
			})
		};
		const { username, password } = this.state;

		if (username && password) {
			fetch(apiBaseUrl + 'login', payload)
				.then((response) => {
					if (response.status === 200) {
						alert("Logged In! You'll be redirected on Home")
						return response.json()
					} else {
						return alert("wrong pass")
					}
				}).then((data) => {
					this.setState({
						accessToken: data.accestToken,
					});
					localStorage.setItem('accessToken', data.accessToken);
					if (data.authenticated === true) {
						;
						this.props.history.push("/");
					}
				})
				.catch((err) => console.log(err));
		} else {
			alert("Cannot be Empty")
		}
	}

	render() {
		return (
			<div>
				<div className="form">
					<div>
						<div className="form-input">
							<div >
								<div className="userData">
									<span>
										<img
											src={UserIcon}
										/>
									</span>
									<input
										autocomplete="off"
										type="text"
										name="username"
										placeholder="Username"
										value={this.state.username}
										onChange={this.handleChangeUsername}
									/>
								</div>
								<div className="userData">
									<span>
										<img
											src={PasswordIcon}
										/>
									</span>
									<input
										autocomplete="off"
										type="password"
										name="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleChangePassword}
									/>
									<p style={(this.state.username && this.state.password) ? { display: 'none' } : { display: 'block' }}> Must fill all the form!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="form-footer">
					<img
						src={Btn}
						onClick={(event) => this.handleClick(event)}
					/>
				</div>
			</div>
		);
	}
}

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			accessToken: '',
		};
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
	}

	handleChangeUsername(event) {
		this.setState({
			username: event.target.value
		})
	}

	handleChangePassword(event) {
		this.setState({
			password: event.target.value
		})
	}

	handleChangeConfirmPassword(event) {
		this.setState({
			confirmPassword: event.target.value
		})
	}

	handleClick(event) {
		var apiBaseUrl = "https://movies-app-siit.herokuapp.com/auth/"
		const payload = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				'username': this.state.username,
				'password': this.state.password
			})
		};

		const { history } = this.props;
		const { password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Password Doesn't Match!")
		} else {
			fetch(apiBaseUrl + 'register', payload)
				.then((response) => {
					if (response.status === 200) {
						alert("Registered, you'll be redirected on Home")
						return response.json()
					} else {
						return alert("Username already existing")
					}
				}).then((data) => {
					this.setState({
						accessToken: data.accestToken,
					})
					localStorage.setItem('accessToken', data.accessToken)
					if (data.authenticated === true) {
						this.props.history.push("/");
					}
				})
				.catch((err) => console.log(err));
		}
	}


	render() {
		return (
			<div>
				<div className="form">
					<div>
						<div className="form-input">
							<div >
								<div className="userData">
									<span>
										<img
											src={UserIcon}
										/>
									</span>
									<input
										autocomplete="off"
										type="text"
										name="username"
										placeholder="Username"
										value={this.state.username}
										onChange={this.handleChangeUsername}
									/>
								</div>
								<div className="userData">
									<span>
										<img
											src={PasswordIcon}
										/>
									</span>
									<input
										autocomplete="off"
										type="password"
										name="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleChangePassword}
									/>
								</div>
								<div className="userData">
									<span>
										<img
											src={PasswordIcon}
										/>
									</span>
									<input
										autocomplete="off"
										type="password"
										name="confirmPassword"
										placeholder="Confirm Password"
										value={this.state.confirmPassword}
										onChange={this.handleChangeConfirmPassword}
									/>
									<p style={this.state.password !== this.state.confirmPassword ? { display: 'block' } : { display: 'none' }}> Password Doesn't Match!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="form-footer">
					<img
						src={BtnReg}
						onClick={(event) => this.handleClick(event)}
					/>
				</div>
			</div>
		);
	}
}

export class LoginRegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		return (

			<div className="form-container">
				<div classsName='form-nav'>
					{this.state.active ?
						<div>
							<img
								type='button'
								src={Btn}
								onClick={this.handleClick}
							/>
							<img
								type='button'
								src={BtnBlank}
								onClick={this.handleClick}
							/>
						</div> :
						<div>
							<img
								type='button'
								src={BtnBlankReg}
								onClick={this.handleClick}
							/>
							<img
								type='button'
								src={BtnReg}
								onClick={this.handleClick}
							/>
						</div>
					}
				</div>
				<div className="form-render">
					{this.state.active ? <RegisterPageWithRouter /> : <LoginPageWithRouter />}
				</div>
			</div >
		)
	}
}

const LoginPageWithRouter = withRouter(LoginPage);
const RegisterPageWithRouter = withRouter(RegisterPage);