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
    const { category } = this.props //destructuring - vine de pe props
    fetch(`${baseURL}/movies?Genre=${category}`, { method: 'GET' })
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
      </div>
    )
  }
}
