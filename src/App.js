import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {MovieDetails}from './Pages/MovieDetailsPage/MovieDetailPage';
import "./Pages/MovieDetailsPage/MovieDetailPage.css";
import "./Pages/MovieDetailsPage/Background.png";



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}