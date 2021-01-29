import React from 'react';
import UserIcon from "../../assets/UserIcon.svg";
import PasswordIcon from "../../assets/PasswordIcon.svg";
import Btn from "../../assets/Btn.svg";
import BtnReg from "../../assets/BtnReg.svg";
import BtnBlank from "../../assets/BtnBlank.svg";
import BtnBlankReg from "../../assets/BtnBlankReg.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import './LoginRegisterPage.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleClick(event) {
        var apiBaseUrl = "https://movies-app-siit.herokuapp.com/auth/";
        var payload = {
            "email": this.username,
            "password": this.password
        }
        fetch(`${apiBaseUrl}login`, payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Login successfull");
                }
                else if (response.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="login-header">
                    <img src={Btn} />
                    <img src={BtnBlank} />
                </div>
                <div className="content">
                    <div className="login-form">
                        <div className="user-group">
                            <span>
                                <img src={UserIcon} />
                            </span>
                            <input type="text" name="username" placeholder="Username" onChange={(event, newValue) => this.setState({ username: newValue })} />
                        </div>
                        <div className="password-group">
                            <span>
                                <img src={PasswordIcon} />
                            </span>
                            <input type="password" name="password" placeholder="Password" onChange={(event, newValue) => this.setState({ password: newValue })} />
                        </div>
                    </div>
                </div>
                <div className="submit-login">
                    <img src={Btn} onClick={(event) => this.handleClick(event)} />
                </div>
            </div>
        );
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        var apiBaseUrl = "http://https://movies-app-siit.herokuapp.com/auth/";
        console.log("values", this.state.first_name, this.state.password);
        var self = this;
        var payload = {
            "username": this.state.first_name,
            "password": this.state.password
        }
        fetch(`${apiBaseUrl}register`, payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Registered succefull");
                }
                else if (response.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="register-header">
                    <img src={BtnReg} />
                    <img src={BtnBlankReg} />
                </div>
                <div className="content">
                    <div className="register-form">
                        <div className="userData">
                            <span>
                                <img src={UserIcon} />
                            </span>
                            <input onChange={(event, newValue) => this.setState({ username: newValue })} type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="userData">
                            <span>
                                <img src={PasswordIcon} />
                            </span>
                            <input onChange={(event, newValue) => this.setState({ password: newValue })} type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="userData">
                            <span>
                                <img src={PasswordIcon} />
                            </span>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="userData">
                            <span>
                                <img src={EmailIcon} />
                            </span>
                            <input onChange={(event, newValue) => this.setState({ email: newValue })} type="text" name="email" placeholder="email@movieDB.com" />
                        </div>
                    </div>
                </div>
                <div className="submit-register">
                    <img src={BtnReg} onClick={(event) => this.handleClick(event)} />
                </div>
            </div>
        );
    }
}

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="LoginPage">
                <div>
                    <div className="container" ref={ref => (this.container = ref)}>
                        <Login containerRef={ref => (this.current = ref)}></Login>
                        <Register containerRef={ref => (this.current = ref)} />
                    </div>
                </div>
            </div>
        );
    }
}