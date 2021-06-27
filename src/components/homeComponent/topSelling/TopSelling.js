import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	CssBaseline,
	Typography,
	Button,
	Box,
	Card,
	CardContent,
} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import IconButton from "@material-ui/core/IconButton";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";
import "../topSelling/TopSelling.css";
import cart1 from "../../../assets/cart1.jpeg";

const TopSelling = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
		if (setCount < 0) {
			return 0;
		}
	};

	const useStyles = makeStyles((_) => ({
		gridList: {
			flexWrap: "wrap",
			// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
			transform: "translateZ(0)",
		},
		title: {},
		titleBar: {
			background:
				"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
		},
		box: {
			display: "flex",
			flexWrap: "wrap",
			overflow: "hidden",
			width: "auto",
			justifyContent: "space-evenly",
			marginBottom: "4px",
		},
		boxText: {
			marginRight: "6px",
			border: "1px solid black",
			padding: "2px 4px",
		},
		quantityBar: {
			display: "flex",
			flexWrap: "wrap",
			overflow: "hidden",
			width: "auto",
			justifyContent: "space-evenly",
			border: "1px solid black",
		},
		quantity__btn: {
			border: "none",
			backgroundColor: "transparent",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
		},
		quantityPrice__btn: {
			backgroundColor: "#16243e !important",
		},
		media: {
			// height: '100%',
			backgroundSize: "cover",
			maxWidth: " 100%",
			maxHeight: "100%",
			// height: 'auto',
			display: "block",
		},
		cartImage: {
			// height: '50vh !important',
			padding: "0px !important",
			// backgroundColor: 'red',
		},
		topSelling__cart: {
			justifyContent: "center",
			display: "flex",
			flexWrap: "wrap",
		},
	}));

	const classes = useStyles();
	return (
		<div className='topSelling'>
			<CssBaseline />
			<Typography variant='h4' className='topSelling__heading'>
				Top Sellings
			</Typography>
			<Box className='box rightBox' component='span' m={1}>
				<Button className='topSelling__btn' variant='contained' size='medium'>
					<Link
						to='/products'
						style={{ textDecoration: "none", color: "#fff" }}
					>
						See More
					</Link>
				</Button>
			</Box>

			<div className={classes.topSelling__cart}>
				<GridList className={classes.gridList} cols={4}>
					<Card className={classes.cartImage}>
						<CardContent>
							<Box className='box rightBox' component='span'>
								<IconButton>
									<ShoppingCartOutlinedIcon />
								</IconButton>
							</Box>
							<img src={cart1} className={classes.media} alt='img' />
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography>Product Name</Typography>
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<Typography> Size </Typography>
							<div className={classes.box}>
								<Typography className={classes.boxText}> 2-3 years</Typography>
								<Typography className={classes.boxText}> 3-4 years</Typography>
								<Typography className={classes.boxText}> 4-5 years</Typography>
							</div>
							<Typography>Qunatity</Typography>
							<div className={classes.quantityBar}>
								<button className={classes.quantity__btn}>
									<AddIcon onClick={handleIncrement} />
								</button>
								<Typography
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									{count}
								</Typography>
								<button className={classes.quantity__btn}>
									<RemoveIcon onClick={handleDecrement} />
								</button>
							</div>
							<Typography>
								Fabric:
								<br />
								100% Cotton, Single Jerser
							</Typography>

							<Box className='box rightBox' component='span' m={1}>
								<Button
									className={classes.quantityPrice__btn}
									variant='contained'
									size='small'
								>
									<Link
										to='/'
										style={{ textDecoration: "none", color: "#fff" }}
									>
										Price $19.99
									</Link>
								</Button>
							</Box>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Box className='box rightBox' component='span'>
								<IconButton>
									<ShoppingCartOutlinedIcon />
								</IconButton>
							</Box>
							<img src={cart1} className={classes.media} alt='img' />
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography>Product Name</Typography>
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<StarBorderRoundedIcon />
							<Typography> Size </Typography>
							<div className={classes.box}>
								<Typography className={classes.boxText}> 2-3 years</Typography>
								<Typography className={classes.boxText}> 3-4 years</Typography>
								<Typography className={classes.boxText}> 4-5 years</Typography>
							</div>
							<Typography>Qunatity</Typography>
							<div className={classes.quantityBar}>
								<button className={classes.quantity__btn}>
									<AddIcon onClick={handleIncrement} />
								</button>
								<Typography
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									{count}
								</Typography>
								<button className={classes.quantity__btn}>
									<RemoveIcon onClick={handleDecrement} />
								</button>
							</div>
							<Typography>
								Fabric:
								<br />
								100% Cotton, Single Jerser
							</Typography>

							<Box className='box rightBox' component='span' m={1}>
								<Button
									className={classes.quantityPrice__btn}
									variant='contained'
									size='small'
								>
									<Link
										to='/'
										style={{ textDecoration: "none", color: "#fff" }}
									>
										Price $19.99
									</Link>
								</Button>
							</Box>
						</CardContent>
					</Card>
				</GridList>
			</div>
		</div>
	);
};

export default TopSelling;
