import React from 'react'
import './Slider.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import QueryBuilder from '@material-ui/icons/QueryBuilder'
import LanguageIcon from '@material-ui/icons/Language'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { detectDevice } from '../../shared/utils.js'
import { Container, Row, Col, Image } from 'react-bootstrap'

export class Slider extends React.Component {
  render() {
    const { movies, categoryName } = this.props // from CarouselContainer

    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className="category-name">{categoryName}</div>
            <hr />
            <Carousel navButtonsAlwaysVisible={true}>
              {movies.map((movie, i) => (
                <Movie key={i} movie={movie} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

class Movie extends React.Component {
  render() {
    const userDevice = detectDevice()

    const { movie } = this.props

    // Base CSS for mobile, tablet, desktop
    const movieCss = {
      backgroundImage: `url(${movie.Poster})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    }

    //for mobile
    const movieCssMobile = {
      ...movieCss,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding: '0',
      height: '450px',
    }

    const movieCssMobileTitle = {
      padding: '5px 10px',
      backgroundColor: 'black',
      opacity: '0.8',
      color: 'white',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      fontSize: '1.8em',
    }

    const handleMovieClick = (event) => {
      window.location.href = `/movie/${movie._id}`
    }

    return (
      <Paper>
        {userDevice === 'mobile' ? (
          <Container onClick={handleMovieClick}>
            <Row>
              <Col xs={12} style={movieCssMobile}>
                <h2 style={movieCssMobileTitle}>
                  {movie.Title} ({movie.Year})
                </h2>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container onClick={handleMovieClick} className="movie-container">
            <Row>
              <Col md={6} lg={4}>
                <Image src={movie.Poster} rounded />
              </Col>
              <Col md={6} lg={8}>
                <h2>
                  {movie.Title} ({movie.Year})
                </h2>
                <Container className="movie-details-container">
                  <Row>
                    <Col md={12} className="movie-icons-container">
                      <StarIcon />
                      <span className="movie-detail">
                        {movie.imdbRating}/10
                      </span>
                    </Col>
                    <Col md={12} className="movie-icons-container">
                      <QueryBuilder />
                      <span className="movie-detail">{movie.Runtime}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="movie-icons-container">
                      <LanguageIcon />
                      <span className="movie-detail">{movie.Language}</span>
                    </Col>
                    <Col md={12} className="movie-icons-container">
                      <LocationOnIcon />
                      <span className="movie-detail">{movie.Country}</span>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        )}
      </Paper>
    )
  }
}
