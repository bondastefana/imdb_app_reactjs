import React from 'react'
import './CarouselContainer.css'
import { Slider } from '../../componets/Slider/Slider'
import { baseURL } from '../../shared/utils.js'

export class CarouselContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    const { category } = this.props
    fetch(`${baseURL}/movies?Genre=${category}`, { method: 'GET' }) // API call - get movies by Genre
      .then((response) => {
        return response.json()
      })
      .then((parsedResponse) => {
        this.setState({ movies: parsedResponse.results })
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  render() {
    const { category } = this.props
    return (
      <div className="carousel">
        <Slider movies={this.state.movies} categoryName={category} />
        {/* The Slider is populated with movies & categoryName*/}
      </div>
    )
  }
}
