import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage'
import { HeaderWithRouter } from './componets/Header/Header'
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailPage'
import { AddMoviePage } from './pages/AddMoviePage/AddMoviePage'
import { EditMoviePage } from './pages/EditMoviePage/EditMoviePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './componets/Footer/Footer'
export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
    }
  }

  // Header comp is included outside the Switch because we want to display it on each page;
  render() {
    return (
      <Router>
        <HeaderWithRouter />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search/:title">
            <SearchPage />
          </Route>
          <Route exact path="/login-register" component={LoginRegisterPage} />
          <Route exact path="/movie/:id">
            <MovieDetailsPage />
          </Route>
          <Route exact path="/addmovie">
            <AddMoviePage />
          </Route>
          <Route exact path="/editmovie">
            <EditMoviePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}
