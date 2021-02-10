import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from '../../componets/SearchComponents/MovieList';
import MovieListHeading from '../../componets/SearchComponents/MovieListHeading';
import SearchBox from '../../componets/SearchComponents/SearchBox';
import './SearchPage.css';
import {useParams} from 'react-router-dom';

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
  const [initialState, setInitialState] = useState(1);

  const filtersArray = [titleValue, typeValue, votesValue, ratingValue, countryValue, languageValue, genreValue, runtimeValue, yearValue];
  const optionArray = ['Title', 'Type', 'imdbVotes', 'imdbRating', 'Country', 'Language', 'Genre', 'Runtime', 'Year'];

  const {title} = useParams();

  const urlFromHomePage = `https://movies-app-siit.herokuapp.com/movies?Title=${title}`

  function buildUrl() {
    let baseUrl = 'https://movies-app-siit.herokuapp.com/movies?';
    for (var i = 0; i < 9; i++) {
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

  useEffect(() =>{
    getMovieRequest(urlFromHomePage);
  }, [initialState, urlFromHomePage]);


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
    <div className="mainSearchContainer">
      <div className='mainContainerSearch'>
        <MovieListHeading heading='Use the search box to find your favourite movies!'></MovieListHeading>
        <SearchBox clickHandler={clickHandler} setTitleValue={setTitleValue} setTypeValue={setTypeValue} setVotesValue={setVotesValue} setRatingValue={setRatingValue} setCountryValue={setCountryValue} setLanguageValue={setLanguageValue} setGenreValue={setGenreValue} setRuntimeValue={setRuntimeValue} setYearValue={setYearValue} />
      </div>
      <div className="moviesContainer"><MovieList movies={movies} />
      </div>
    </div>
  );
}

export default SearchPage;
