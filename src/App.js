import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage';
import { Header } from './componets/Header/Header';
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailPage';
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
					</Switch>
				</Container>
			</Router>
		);
	}
}
