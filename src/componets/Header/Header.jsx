import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/AppLogo.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { detectDevice, baseURL } from '../../shared/utils.js'
export class Header extends React.Component {
  // header that renders: app-logo and app-name;
  // header = navigation (react link login/register) + search input(bootstrap comp)
  render() {
    const userDevice = detectDevice()
    const handleTyping = (event) => {
      //path cu SearchPage, mai departe event.target.value ca string
      if (event.key === 'Enter') {
        // console.log('Change the State with ', event.target.value)
        fetch(`${baseURL}/movies?Title=${event.target.value}`, {
          method: 'GET',
        })
          .then((response) => {
            return response.json()
          })
          .then((parsedResponse) => console.log(parsedResponse.results))
          .catch((error) => {
            throw new Error(error)
          })
      }
    }
    return (
      <Container className="header" fluid>
        <Row
          style={
            userDevice !== 'mobile' ? { width: '100%' } : { width: 'auto' }
          }
        >
          <Col xs={4} md={4} lg={6}>
            <Row>
              <Col xs={6} lg={2} className="logo-container">
                <Logo className="app-logo" />
              </Col>
              <Col xs={6} lg={10} className="appname-container">
                <p className="app-name">MyIMDB</p>
              </Col>
            </Row>
          </Col>
          <Col xs={8} md={4} lg={3} className="links-container">
            <Link to="/login-register" className="login-register">
              Login/Register
            </Link>
          </Col>
          <Col xs={12} md={4} lg={3} className="search-container">
            {/* event on enter/on keydown verified, it leads you to the search page where the get movie by name call is triggered. 
						send the information from search input and get it on search page through url*/}
            <input onKeyDown={handleTyping} placeholder="Search" type="text" />
          </Col>
        </Row>
      </Container>
    )
  }
}
