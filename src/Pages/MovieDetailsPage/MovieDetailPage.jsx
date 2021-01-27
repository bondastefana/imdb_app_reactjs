import React from "react";



export class MovieDetails extends React.Component{

    render(){
        
        
        const styleArea = {
           marginTop: "0%",
           marginLeft:"5%",
            width: "90%",
            height: "90%",
            background: "rgba(230, 230, 230, 0.30)",
            borderRadius: "20px",
            
        }
        const buttonStyle ={
            border: "0px",
            borderRadius: "50px",
            padding: "10px 15px",
            background: "rgba(207, 202, 217, 0.48)",
            marginTop: "3%",
            marginBottom: "1%",
            marginLeft: "10%", 
        }
        const details = { 
            padding: "20px",
            margin: "10%"
        }

        return(
        <container id="background-page">
        <button className="buttons" style={buttonStyle}>Edit Movie</button>
          <div style={styleArea} >
            <div id= "movie-image" >
                <div>Movie image</div>
             </div>
            <div id="movie-details" style={details}>
             
             <div id="movie-description">
             <h2>Movie title</h2>
             <h3>Descriprion</h3>
             <div>Rating</div>
             <div id='details'>
                <h3> Director
                    <h4>Dir Name</h4>
                </h3>
                <h3> Writers
                    <h4>Writer Name</h4>
                </h3>
                <h3> Stars
                    <h4>Star Name</h4>
                </h3>
             </div>
             </div>
            </div>
          </div>
        </container>)
    }
}




