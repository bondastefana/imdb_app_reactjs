import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import  SearchPage  from './pages/SearchPage/SearchPage'
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage'
import { Header } from './componets/Header/Header'
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailPage'
import { AddMoviePage } from './pages/AddMoviePage/AddMoviePage'
import { EditMoviePage } from './pages/EditMoviePage/EditMoviePage'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends React.Component {
  // Header comp is included outside the Switch because we want to display it on each page;
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
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
      </Router>
    )
  }
}
