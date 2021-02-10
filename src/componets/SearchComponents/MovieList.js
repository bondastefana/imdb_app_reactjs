import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => <div className="oneMovieContainer" onClick={function(){window.location.href = `/movie/${movie._id}`}} key={index}>
                <p className="movieTitle">{movie.Title}</p>
                <img src={movie.Poster} alt="Movie"></img>
            </div>)}
        </>
    )
}

export default MovieList;