import React from "react";
import "./MovieDetailPage.css";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
import "../../assets/BtnBlankReg.svg";
 import { LoginRegisterPage } from "../LoginRegisterPage/LoginRegisterPage";
 import { ReactComponent } from "../../assets/BtnBlankReg.svg";
 import { HomePage } from "../HomePage/HomePage";
 import {baseURL} from "../../../src/shared/utils"
 import { propTypes } from "react-bootstrap/esm/Image";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadind: true,
      movie: [],
      
     
    };
   
  }

  async componentDidMount() {
    console.log(window.location)
    const id = window.location.pathname.replace('/movie/', '')
    const url = 'https://movies-app-siit.herokuapp.com/movies/'
    const response = await fetch(url + id)
    const data = await response.json()
    this.setState({ movie: data, loading: false })
  }
  
  render() {
    const styleArea = {
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "0%",
      width: "95vw",
      height: "90%",
      background: "rgba(230, 230, 240, 0.10)",
      borderRadius: "20px",
      zIndex: "-1px",
    };

      
      const backButton = () => this.props.history.goBack();

      const editButton = () => {
        this.setState({
          editMovie: true,
        });
      };

    return (
      
      <div  >
        { this.state.loading || !this.state.movie? (
          <div className="loading">loading...</div>
        ) : (
          <tr className="movie-details" style={styleArea}>
            <th>
              <img  className="posters" src={this.state.movie.Poster}/>
            </th>
            
            <th>
              <h2 className="movie-title">{this.state.movie.Title}</h2>
              <h2 className="movie-des">{this.state.movie.Year}</h2>
            
              <Link to="/editmovie">
                <button className="button" onClick={()=>editButton}>
                  Edit Movie
                </button>
              </Link>
              <div className="imdbRating">
                {" "}
                IMDB Rating:
                <span className="rating"> {this.state.movie.imdbRating}</span>
              </div>
              <ul className="movie-description">
                <li>
                  {" "}
                  Year :
                  <span className="movie-des"> {this.state.movie.Year}</span>
                </li>
                <li>
                  Plot :
                  <span className="movie-des-plot"> {this.state.movie.Plot}</span>
                </li>
                <li>
                  Genre :
                  <span className="movie-des"> {this.state.movie.Genre}</span>
                </li>
                <li>
                  Country :
                  <span className="movie-des"> {this.state.movie.Country}</span>
                </li>
                <li>
                  Type :
                  <span className="movie-des"> {this.state.movie.Type}</span>
                </li>
                <li>
                  Runtime :
                  <span className="movie-des"> {this.state.movie.Runtime}</span>
                </li>
                <li>
                  Actors:
                  <span className="movie-des"> {this.state.movie.Actors}</span>
                </li>
                <li>
                  Awards:
                  <span className="movie-des"> {this.state.movie.Awards}</span>
                </li>
                <li>
                  Production:
                  <span className="movie-des"> {this.state.movie.Production}</span>
                </li>
              </ul>
            </th>
            <button className="exit" onClick={backButton}>
              X
            </button>
          </tr>
        )}
      </div>
    );
  }
}

export const MovieDetailsPage = withRouter(MovieDetails);
