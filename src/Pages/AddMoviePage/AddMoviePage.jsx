import React from "react";
import "./AddMoviePage.css";

class AddMoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: "",
      year: "",
      imdbID: "",
      type: "",
      poster: "",
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const isAuthenticated = localStorage.getItem('accessToken')
    console.log(isAuthenticated)

    if(!isAuthenticated){
      window.location.href="/"
    }
  }

  handleClick(event) {
    var apiBaseUrl = "https://movies-app-siit.herokuapp.com/movies";
    console.log(
      "values",
      this.state.Title,
      this.state.Year,
      this.state.imdbID,
      this.state.Type,
      this.state.Poster
    );

    fetch(apiBaseUrl, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.Title,
        year: this.state.Year,
        imdbID: this.state.imdbID,
        type: this.state.Type,
        poster: this.state.Poster,
      }),
    });
    console.log(event);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
        },
      });
    }
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event);
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
            <button className="add-button" type="submit" onClick={this.handleClick}>

              Add
            </button>
          </div>
        </form>
        <p>{this.state.items.text}</p>
      </div>
    );
  }
}

export { AddMoviePage };
