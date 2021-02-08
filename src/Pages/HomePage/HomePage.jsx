import React from 'react'
import './HomePage.css'
import { CarouselContainer } from '../../componets/CarouselContainer/CarouselContainer'
import { Container } from 'react-bootstrap'

export class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //set the categories on the state
      categories: [
        'Action',
        'Comedy',
        'Drama',
        'Crime',
        'Mystery',
        'Thriller',
        'Horror',
        'Animation',
        'Sci-Fi',
      ],
    }
  }

  render() {
    return (
      <Container fluid>
        <p className="motto">... bringing Joy through Reel</p>
        {this.state.categories.map((category, index) => {
          return <CarouselContainer key={index} category={category} /> //for each category from the array, return CarouselContainer (title/sliderComp)
        })}
      </Container>
    )
  }
}
