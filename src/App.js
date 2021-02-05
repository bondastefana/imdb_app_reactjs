import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage'
import SearchPage from './Pages/SearchPage/SearchPage'
import { LoginRegisterPage } from './Pages/LoginRegisterPage/LoginRegisterPage'
import { HeaderWithRouter } from './componets/Header/Header'
import { MovieDetailsPage } from './Pages/MovieDetailsPage/MovieDetailPage'
import { AddMoviePage } from './Pages/AddMoviePage/AddMoviePage'
import { EditMoviePage } from './Pages/EditMoviePage/EditMoviePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './componets/Footer/Footer'
export class App extends React.Component {
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
          <Route exact path="/login-register">
            <LoginRegisterPage />
          </Route>
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
