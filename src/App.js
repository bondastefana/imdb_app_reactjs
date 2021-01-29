import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { SearchPage } from './Pages/SearchPage/SearchPage';
import { LoginRegisterPage } from './Pages/LoginRegisterPage/LoginRegisterPage';
import { Header } from './componets/Header/Header';
import { AddMoviePage } from './Pages/AddMoviePage/AddMoviePage'
import { EditMoviePage } from './Pages/EditMoviePage/EditMoviePage'
import { MovieDetailsPage } from './Pages/MovieDetailsPage/MovieDetailPage';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
	// Header comp is included outside the Switch because we want to display it on each page;
	render() {
		return (
			<Router>
				<Container fluid>
					<Header />
					<Switch>
						<Route path="/search">
							<SearchPage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
						<Route path="/login-register">
							<LoginRegisterPage />
						</Route>
						<Route path="/movie/:id">
							<MovieDetailsPage />
						</Route>
						<Route path="/addmovie">
							<AddMoviePage />
						</Route>
						<Route path="/editmovie">
							<EditMoviePage />
						</Route>
					</Switch>
				</Container>
			</Router>
		);
	}
}
