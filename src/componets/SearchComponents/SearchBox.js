import React from 'react';



const SearchBox = (props) => {

    return (
        <div className='searchBox'>
            <p>Search by Movie Title or...</p>
            <input className='form-control' value={props.value} onChange={(event) => props.setTitleValue(event.target.value)} placeholder='Type to Search...'></input>
            <p>...Try adding some more filter options!</p>
            <input className='form-control' value={props.value} onChange={(event) => props.setTypeValue(event.target.value)} placeholder='Movie Type'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setVotesValue(event.target.value)} placeholder='IMDB Votes'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setRatingValue(event.target.value)} placeholder='IMDB Rating'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setCountryValue(event.target.value)} placeholder='Country'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setLanguageValue(event.target.value)} placeholder='Language'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setGenreValue(event.target.value)} placeholder='Genre'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setRuntimeValue(event.target.value)} placeholder='Runtime'></input>
            <input className='form-control' value={props.value} onChange={(event) => props.setYearValue(event.target.value)} placeholder='Year'></input>

            <button className='submit form-control searchButton' onClick={props.clickHandler}>Search</button>
        </div>
    )
}

export default SearchBox;