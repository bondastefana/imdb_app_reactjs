import React from 'react'
import { Container } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinkedIn from '../../assets/iconmonstr-linkedin-3.svg'
import GitHub from '../../assets/iconmonstr-github-1.svg'
import StefanI from '../../assets/Stefan.jpg'
import Liviu from '../../assets/Ionut-Liviu.jpg'
import Andreea from '../../assets/Andreea.jpg'
import StefanC from '../../assets/StefanC.jpg'
import Dan from '../../assets/Dan.jpg'

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(to top left, #808080 -220%, #000000 79%)',
  },

  footerTitle: {
    color: 'white',
    textAlign: 'center',
    padding: '25px 0',
    fontSize: '26px',
  },
  footerContainer: {
    justifyContent: 'center',
    paddingBottom: '20px',
  },

  root: {
    borderRadius: '50%',
    padding: '0 auto',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.600)',
  },

  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    padding: '0',
    textAlign: 'center',
  },

  description: {
    margin: 'auto',
    textAlign: 'center',
    padding: '5px ',
  },

  cardContent: {
    padding: '0',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    zIndex: '-1',
  },
})

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Container className={classes.footerTitle} fluid>
        Our Team
      </Container>
      <Grid container className={classes.footerContainer}>
        <Grid item xs={12} sm={4} lg={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                image={StefanI}
                title="Stefan-Tudor Iloaie"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.name}
                  gutterBottom
                  variant="subtitle1"
                >
                  Stefan-Tudor Iloaie
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  Add Movie/Edit Movie
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button
                  size="small"
                  href="https://www.linkedin.com/in/stefan-tudor-iloaie-8119859b/"
                  target="_blank"
                >
                  <img src={LinkedIn} />
                </Button>
                <Button
                  size="small"
                  href="https://github.com/tudistef"
                  target="_blank"
                >
                  <img src={GitHub} />
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                image={Liviu}
                title="Ionut-Liviu Cojocaru"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.name}
                  gutterBottom
                  variant="subtitle1"
                >
                  Ionut-Liviu Cojocaru
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  Login/Register Page & Footer
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button
                  size="small"
                  href="https://www.linkedin.com/in/ionutliviucojocaru/"
                  target="_blank"
                >
                  <img src={LinkedIn} />
                </Button>
                <Button
                  size="small"
                  href="https://github.com/CojocaruionutLiviu"
                  target="_blank"
                >
                  <img src={GitHub} />
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                image={Andreea}
                title="Andreea-Stefana Bonda"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.name}
                  gutterBottom
                  variant="subtitle1"
                >
                  Andreea-Stefana Bonda
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  Home Page/Header & Footer
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button
                  size="small"
                  href="https://www.linkedin.com/in/andreea-stefana-bonda-9727011b4/"
                  target="_blank"
                >
                  <img src={LinkedIn} />
                </Button>
                <Button
                  size="small"
                  href="https://github.com/bondastefana"
                  target="_blank"
                >
                  <img src={GitHub} />
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                image={StefanC}
                title="Stefan Ciobanu"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.name}
                  gutterBottom
                  variant="subtitle1"
                >
                  Stefan Ciobanu
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  Movie Details Page
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button size="small" href="">
                  <img src={LinkedIn} />
                </Button>
                <Button
                  size="small"
                  href="https://github.com/Stefan-ciobanu"
                  target="_blank"
                >
                  <img src={GitHub} />
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                image={Dan}
                title="Bacila Dan"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.name}
                  gutterBottom
                  variant="subtitle1"
                >
                  Dan Bacila
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  Search Page
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button size="small" href="" target="_blank">
                  <img src={LinkedIn} />
                </Button>
                <Button
                  size="small"
                  href="https://github.com/baciladan"
                  target="_blank"
                >
                  <img src={GitHub} />
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
