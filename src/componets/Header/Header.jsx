import React from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/AppLogo.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { detectDevice, baseURL } from '../../shared/utils.js'
export class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  // header that renders: app-logo and app-name;
  // header = navigation (react link login/register) + search input(bootstrap comp)

  handleTyping = (event) => {
    const { history } = this.props
    //path cu SearchPage, mai departe event.target.value ca string
    if (event.key === 'Enter') {
      // console.log('Change the State with ', event.target.value)
      let searchedMovie = event.target.value
      event.target.value = ''
      history.push(`/search/${searchedMovie}`)
    }
  }

  handleLogout = () => {
    localStorage.removeItem('accessToken')
    window.location.reload()
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
            {/* event on enter/on keydown verified, it leads you to the search page where the get movie by name call is triggered. 
						send the information from search input and get it on search page through url*/}
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
