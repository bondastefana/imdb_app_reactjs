import React from 'react';



const SearchBox = (props) => {

    return (
        <div className='col col-sm-4'>
            <p>Search by Title:</p>
            <input className='form-control' value={props.value} onChange={(event) => props.setTitleValue(event.target.value)} placeholder='Type to Search...'></input>
            <p>Movie Type:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setTypeValue(event.target.value)} placeholder='Movie Type'></input>
            <p>IMDB Votes:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setVotesValue(event.target.value)} placeholder='IMDB Votes'></input>
            <p>IMDB Rating:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setRatingValue(event.target.value)} placeholder='IMDB Rating'></input>
            <p>Country:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setCountryValue(event.target.value)} placeholder='Country'></input>
            <p>Language:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setLanguageValue(event.target.value)} placeholder='Language'></input>
            <p>Genre:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setGenreValue(event.target.value)} placeholder='Genre'></input>
            <p>Runtime:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setRuntimeValue(event.target.value)} placeholder='Runtime'></input>
            <p>Year:</p>
            <input className='form-contorl' value={props.value} onChange={(event) => props.setYearValue(event.target.value)} placeholder='Year'></input>

            <button className='submit form-control' onClick={props.clickHandler}>Search</button>
        </div>
    )
}

export default SearchBox;