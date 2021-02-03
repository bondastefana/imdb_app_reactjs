import React from 'react'
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
            data: [],
            username: '',
            password: '',
            accessToken: '',
            authenticated: false
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

    componentDidMount() {
        const isAuthenticated = localStorage.getItem('accessToken')
        if (isAuthenticated) {
            console.log('Loged in')
            history.push('/')
        }
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

        fetch(apiBaseUrl + 'login', payload)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken)
                window.location.href = '/'
            })
            .catch((err) => {
                console.log(err)
                console.log("Wrong Password/Username not Registered!")
            })
    }

    render() {
        return (
            <div>
                <div className="content">
                    <div className="login-form">
                        <div className="userData">
                            <span>
                                <img
                                    src={UserIcon}
                                />
                            </span>
                            <input
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
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                            />
                        </div>
                    </div>
                </div>
                <div className="submit-login">
                    <img
                        src={Btn}
                        onClick={(event) => this.handleClick(event)}
                    />
                </div>
            </div>
        );
    }
}

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: '',
            password: '',
            accessToken: '',
            authenticated: false
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

    componentDidMount() {
        const isAuthenticated = localStorage.getItem('accessToken')
        if (isAuthenticated) {
            console.log('Loged in')
            history.push('/')
        }
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

        let credentials;

        fetch(apiBaseUrl + 'register', payload)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken)
                window.location.href = '/'
            })
            .catch((err) => {
                console.log(err)
                console.log("Username already Exist")
            })
    }


    render() {
        return (
            <div>
                <div className="content">
                    <div className="register-form">
                        <div className="userData">
                            <span>
                                <img
                                    src={UserIcon}
                                />
                            </span>
                            <input
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
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required />
                        </div>
                    </div>
                </div>
                <div className="submit-register">
                    <img
                        src={BtnReg}
                        onClick={(event) => this.handleClick(event)}
                    />
                </div>
            </div>
        )
    }
}

export class LoginRegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
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
            <div className="base-container" >
                <div classsName='toggle-nav'>
                    {this.state.active ?
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
                        </div> :
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
                        </div>
                    }
                </div>
                <div className="login-register">
                    {this.state.active ? <RegisterPage /> : <LoginPage />}
                </div>
            </div>
        )
    }
}
