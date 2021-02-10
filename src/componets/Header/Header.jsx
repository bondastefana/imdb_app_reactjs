import React from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/AppLogo.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { detectDevice } from '../../shared/utils.js'
export class Header extends React.Component {
  handleTyping = (event) => {
    const { history } = this.props

    if (event.key === 'Enter') {
      let searchedMovie = event.target.value
      event.target.value = ''
      history.push(`/search/${searchedMovie}`)
    }
  }

  handleLogout = () => {
    const { history } = this.props
    localStorage.removeItem('accessToken')
    history.push('/')
  }
  render() {
    const isAuthenticated = localStorage.getItem('accessToken')
    const userDevice = detectDevice()

    return (
      <Container className="header" fluid>
        <Row
          style={
            userDevice !== 'mobile' ? { width: '100%' } : { width: 'auto' } //mobile
          }
        >
          <Col xs={4} md={4} lg={6}>
            <Row>
              <Col xs={6} lg={2} className="logo-container">
                <Logo className="app-logo" />
              </Col>
              <Col xs={6} lg={10} className="appname-container">
                <Link to="/">
                  <p className="app-name">MyIMDB</p>
                </Link>
              </Col>
            </Row>
          </Col>
          {!isAuthenticated ? (
            <Col xs={8} md={3} lg={2} className="links-container">
              <Link to="/login-register" className="login-register">
                Login/Register
              </Link>
            </Col>
          ) : (
            <Col xs={8} md={3} lg={2} className="links-container">
              <Link to="/addmovie" className="add-movie">
                Add Movie
              </Link>
            </Col>
          )}

          <Col
            xs={isAuthenticated ? 9 : 10}
            md={isAuthenticated ? 4 : 5}
            lg={isAuthenticated ? 3 : 4}
            className="search-container"
          >
            <input
              onKeyDown={this.handleTyping}
              placeholder="Search"
              type="text"
            />
          </Col>
          {isAuthenticated ? (
            <Col xs={2} md={1} lg={1} className="logout-container">
              <p onClick={this.handleLogout} className="logout">
                Logout
              </p>
            </Col>
          ) : null}
        </Row>
      </Container>
    )
  }
}

export const HeaderWithRouter = withRouter(Header)
