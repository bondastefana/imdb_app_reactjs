import React from "react";


// Making the static components on the page
    // The Container 
        // Image of the movie selected 
        // Title and description
        // The  "Edit Movie" Button 

// Making the interactive components 
    // get movies- API 
    // get description
    // get Poster 
    // rating etc
    // 
    //
    // onClick() - show the details
    // edit movie - 
        
export class MovieDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://movies-api-siit.herokuapp.com/")
          .then(response => response.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
            });
        })
    };

    render(){
        
        const styleArea = {
           marginTop: "0%",
           marginLeft:"2%",
           width: "95vw",
            height: "95vh",
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
       

        return(
        <container id="background-page">
        <button className="buttons" style={buttonStyle}>Edit Movie</button>
        <table  style={styleArea} >
            <tr>
                <th id="movie-image">Movie image</th>
                <th><h2>Movie title</h2>
                    <th id="movie-description">  
                                      
                        <h3> Director:
                            <span>  Dir Name</span>
                        </h3>
                        <h3> Writers:
                            <span>  Writer Name</span>
                        </h3>
                        <h3> Stars:
                            <span>  Star Name</span>
                        </h3>
                    </th> 
                </th>
                <td>year</td> 
            </tr>   
        </table>
        </container>
        )
    }
}




