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
  // Movies comp
  // slogan
  // Carousel component = movie category title + slider with the movies from that category
  // Using few categories, the component will be instantiated
  // category=[category string array]
  // map(category)
  // for each movie category => fetch(category) inside Carousel comp => set the title with categ name;
  // response will be passed down as props on the slider
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
