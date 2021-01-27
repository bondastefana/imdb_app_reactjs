import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/AppLogo.svg'
import { InputGroup, FormControl } from 'react-bootstrap'

export class Header extends React.Component {
  // header that renders: app-logo and app-name;
  // header = navigation (react link login/register) + search input(bootstrap comp)
  render() {
    return (
      <header className="header">
        <Link to="/" className="app-name">
          <Logo className="app-logo" />
          <p className="my-imdb">MyIMDB</p>
        </Link>
        <div className="navigation-items">
          <nav className="nav-items">
            <ul className="links-container">
              <li className="links">
                <Link to="/login-register">Login/Register</Link>
              </li>
            </ul>
          </nav>
          <InputGroup>
            <div className="search">
              {/* event on enter/on keydown verified, it leads you to the search page where the get mvie by name call is triggered. 
						send the information from search input and get it on search page through state params?*/}
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </InputGroup>
        </div>
      </header>
    )
  }
}
