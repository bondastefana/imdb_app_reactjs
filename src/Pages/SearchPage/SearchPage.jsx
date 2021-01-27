import React from 'react';
import './App.js';
// Ce se tine pe state?
// Ce vine pe props?

export class SearchPage extends React.Component {

  render() {

    //Randam Pagina de Search

    return (<div>search page</div>)
  }
  
}

export class FetchMovies extends React.Component{

  //Folosim state pentru a tine valoarea loading si lista de filme primita ca raspuns
  state = {
    loading: true,
    movieList: []
  }

  //Fetch ul se realizeaza in compnentDidMount() pentu a ne asigura ca loaderul este afisat pe ecran

  async componentDidMount(){

    //Definim URL ul facem fetch(url) si parsam raspunsul ca json

    //La acest UrL trebuie sa adaugam inputul utilizatorului

    //Inputul se adauga astfel:   ?Key=value&Key2=value&...

    //Asteptam ca raspunsul sa fie 200

    const url = "https://movies-app-siit.herokuapp.com/movies";
    const response = await fetch(url);
    const data;


    if(response.status===200){
       data = await response.json();
    }else{
      this.state.movieList.push("Error");
    }
   

    Object.values(data.results).forEach(movie => this.state.movieList.push(movie));

    if(this.state.movieList){
      this.setState({loading: false});
    }

  }

  

  render(){

    //Randam Elementele primite din Fetch

    return(<div>List of movies from Response</div>)
  }

}