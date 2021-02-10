import React from 'react'
import { Container } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkedIn from "../../assets/iconmonstr-linkedin-3.svg";
import GitHub from "../../assets/iconmonstr-github-1.svg";
import StefanI from "../../assets/Stefan.jpg";
import Liviu from "../../assets/Ionut-Liviu.jpg";
import Andreea from "../../assets/Andreea.jpg";
import StefanC from "../../assets/StefanC.jpg";
import Dan from "../../assets/Dan.jpg";

const useStyles = makeStyles({
	footerContainer: {
		maxWidth: '100%',
		height: '100%',
		flexWrap: 'wrap',
		display: "flex",
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 255, 255, 0.300)'
	},

	root: {
		margin: 15,
		maxWidth: 345,
		maxHeight: 345,
		borderRadius: '50%',
		display: "flex",
		justifyContent: "center",
		flexDirection: 'column',
		backgroundColor: 'rgba(255, 255, 255, 0.600)'
	},

	image: {
		width: 150,
		height: 150,
		borderRadius: "50%",
		marginLeft: 97.5,
		marginTop: 10
	},

	name: {
		width: 345,
		height: 31,
		textAlign: 'center',
	},

	description: {
		width: 260,
		height: 30,
		marginLeft: 15,
		textAlign: 'center',
	},

	buttons: {
		display: "flex",
		justifyContent: "center",
		padding: 20,
		zIndex: "-1",
	},
});

export default function Footer() {

	const classes = useStyles();
	return (
		<Container className={classes.footerContainer} fluid>
			<Card
				className={classes.root}
			>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						image={StefanI}
						title="Stefan-Tudor Iloaie"
					/>
					<CardContent>
						<Typography
							className={classes.name}
							gutterBottom variant="h5"
							component="h2"
						>
							Stefan-Tudor Iloaie
          </Typography>
						<Typography
							className={classes.description}
							variant="body2"
							color="textSecondary" component="p"
						>
							Coded with passion the footer and The login page
          </Typography>
					</CardContent>
					<div className={classes.buttons}>
						<Button
							size="small"
							href="https://www.linkedin.com/in/stefan-tudor-iloaie-8119859b/"
							target="_blank"
						>
							<img
								src={LinkedIn}
							/>
						</Button>
						<Button
							size="small"
							href="https://github.com/tudistef"
							target="_blank"
						>
							<img
								src={GitHub} />
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Card
				className={classes.root}
			>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						image={Liviu}
						title="Ionut-Liviu Cojocaru"
					/>
					<CardContent>
						<Typography
							className={classes.name}
							gutterBottom variant="h5"
							component="h2"
						>
							Ionut-Liviu Cojocaru
          </Typography>
						<Typography
							className={classes.description}
							variant="body2"
							color="textSecondary" component="p"
						>
							Coded with passion the footer and The login page
          </Typography>
					</CardContent>
					<div className={classes.buttons}>
						<Button
							size="small"
							href="https://www.linkedin.com/in/ionutliviucojocaru/"
							target="_blank"
						>
							<img
								src={LinkedIn}
							/>
						</Button>
						<Button
							size="small"
							href="https://github.com/CojocaruionutLiviu"
							target="_blank"
						>
							<img
								src={GitHub} />
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Card
				className={classes.root}
			>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						image={Andreea}
						title="Andreea-Stefana Bonda"
					/>
					<CardContent>
						<Typography
							className={classes.name}
							gutterBottom variant="h5"
							component="h2"
						>
							Andreea-Stafana Bonda
          </Typography>
						<Typography
							className={classes.description}
							variant="body2"
							color="textSecondary" component="p"
						>
							Coded with passion the footer and The login page
          </Typography>
					</CardContent>
					<div className={classes.buttons}>
						<Button
							size="small"
							href=""
							target="_blank"
						>
							<img
								src={LinkedIn}
							/>
						</Button>
						<Button
							size="small"
							href="https://github.com/bondastefana"
							target="_blank"
						>
							<img
								src={GitHub} />
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Card
				className={classes.root}
			>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						image={StefanC}
						title="Stefan Ciobanu"
					/>
					<CardContent>
						<Typography
							className={classes.name}
							gutterBottom variant="h5"
							component="h2"
						>
							Stefan Ciobanu
          </Typography>
						<Typography
							className={classes.description}
							variant="body2"
							color="textSecondary" component="p"
						>
							Coded with passion the footer and The login page
          </Typography>
					</CardContent>
					<div className={classes.buttons}>
						<Button
							size="small"
							href=""
						>
							<img
								src={LinkedIn}
							/>
						</Button>
						<Button
							size="small"
							href="https://github.com/Stefan-ciobanu"
							target="_blank"
						>
							<img
								src={GitHub} />
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Card
				className={classes.root}
			>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						image={Dan}
						title="Bacila Dan"
					/>
					<CardContent>
						<Typography
							className={classes.name}
							gutterBottom variant="h5"
							component="h2"
						>
							Dan Bacila
          </Typography>
						<Typography
							className={classes.description}
							variant="body2"
							color="textSecondary" component="p"
						>
							Coded with passion the footer and The login page
          </Typography>
					</CardContent>
					<div className={classes.buttons}>
						<Button
							size="small"
							href=""
							target="_blank"
						>
							<img
								src={LinkedIn}
							/>
						</Button>
						<Button
							size="small"
							href="https://github.com/baciladan"
							target="_blank"
						>
							<img
								src={GitHub} />
						</Button>
					</div>
				</CardActionArea>
			</Card>
		</Container >
	);
}

