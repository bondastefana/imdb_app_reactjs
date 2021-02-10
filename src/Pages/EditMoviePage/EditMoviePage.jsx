import React from "react";
import { withRouter } from "react-router-dom";
import "./EditMoviePage.css";

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 0,
      items: [],
      title: "",
      year: "",
      imdbID: "",
      type: "",
      poster: "",
      movie: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      movieId,
      title,
      year,
      imdbID,
      type,
      posterUrl,
    } = this.props.location.movieDetails

    this.setState({
      movieId: movieId,
      title: title,
      year: year,
      imdbID: imdbID,
      type: type,
      poster: posterUrl,
    })

    const isAuthenticated = localStorage.getItem("accessToken");
    if (!isAuthenticated) {
      window.location.href = "/";
    }  
  }

  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = `https://movies-app-siit.herokuapp.com/movies/${this.state.movieId}`;
    console.log(
      "values",
      this.state.title,
      this.state.year,
      this.state.imdbID,
      this.state.type,
      this.state.poster
    );

    fetch(apiBaseUrl, {
      headers: {
        "X-Auth-Token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        title: this.state.title,
        year: this.state.year,
        imdbID: this.state.imdbID,
        type: this.state.type,
        poster: this.state.poster,
      }),
    }).then((response) => {
      alert('Movie has been edited')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    })
  }

  editMovie() {
    this.setState({ items: "" });
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="addmovie">
        <form className="add-form-movie" id="add-form">
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Enter Title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <input
            className="title"
            name="year"
            type="text"
            placeholder="Enter Year"
            value={this.state.year}
            onChange={this.handleInput}
          />
          <input
            className="title"
            name="imdbID"
            type="text"
            placeholder="Enter Imdb ID"
            value={this.state.imdbID}
            onChange={this.handleInput}
          />
          <input
            className="title"
            name="type"
            type="text"
            placeholder="Enter Type"
            value={this.state.type}
            onChange={this.handleInput}
          />
          <input
            className="title"
            name="poster"
            type="text"
            placeholder="Enter Poster URL"
            value={this.state.poster}
            onChange={this.handleInput}
          />
          <div>
            <button className="add-button" onClick={this.handleClick}>
              Edit Movie
            </button>
          </div>
        </form>
        <p>{this.state.items.text}</p>
      </div>
    );
  }
}

export const EditMoviePage = withRouter(EditMovie)
