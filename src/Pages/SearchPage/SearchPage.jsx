import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


const SearchPage = () => {

  const [movies, setMovies] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [votesValue, setVotesValue] = useState('');
  const [ratingValue, setRatingValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [languageValue, setLanguageValue] = useState('');
  const [genreValue, setGenreValue] = useState('');
  const [runtimeValue, setRuntimeValue] = useState('');
  const [yearValue, setYearValue] = useState('');

  const filtersArray = [];
  filtersArray.push(titleValue, typeValue, votesValue, ratingValue, countryValue, languageValue, genreValue, runtimeValue, yearValue);
  const optionArray = ['Title', 'Type', 'imdbVotes', 'imdbRating', 'Country', 'Language', 'Genre', 'Runtime', 'Year'];



  function buildUrl() {
    let baseUrl = 'https://movies-app-siit.herokuapp.com/movies?';
    for (let i = 0; i < 9; i++) {
      if (filtersArray[i] !== '') {
        baseUrl += `${optionArray[i]}=${filtersArray[i]}&`;
      }
    }
    return baseUrl;
  }


  const getMovieRequest = async (url) => {

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.results);
  }


  // Varianta atunci cand userul da click pe butonul de cautare
  const clickHandler = () => {
    const searchUrl = buildUrl();
    getMovieRequest(searchUrl);
    console.log('Search From Click!');
  }

  // Varianta functionala atunci cand userul scrie in Form Input
  // useEffect(() => {

  //   getMovieRequest(searchValue, filterValue, optionValue);

  // }, [searchValue, filterValue, optionValue])

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'></MovieListHeading>
        <SearchBox clickHandler={clickHandler} setTitleValue={setTitleValue} setTypeValue={setTypeValue} setVotesValue={setVotesValue} setRatingValue={setRatingValue} setCountryValue={setCountryValue} setLanguageValue={setLanguageValue} setGenreValue={setGenreValue} setRuntimeValue={setRuntimeValue} setYearValue={setYearValue} />
      </div>
      <div className="row"><MovieList movies={movies} />
      </div>
    </div>
  );
}

export {SearchPage};
