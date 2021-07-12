import {
	Box,
	Button,
	Card,
	CardContent,
	CssBaseline,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import "../justForYou/JustForYou.css";

import featuredCategory1 from "../../../assets/Featured-Category1.png";
import featuredCategory2 from "../../../assets/Featured-Category2.png";
import featuredCategory3 from "../../../assets/Featured-Category3.png";
import { Link } from "react-router-dom";

const JustForYou = () => {
	const useStyles = makeStyles((_) => ({
		root: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-between",
			overflow: "hidden",
		},
		grid: {
			transform: "translateZ(0)",
		},
	}));
	const cartData = [
		{
			id: 1,
			image: featuredCategory1,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 2,
			image: featuredCategory2,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 3,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 4,
			image: featuredCategory1,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 5,
			image: featuredCategory2,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 6,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 7,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 8,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 9,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
		{
			id: 10,
			image: featuredCategory3,
			title: "Product Name",
			price: "$00.00",
		},
	];

	const classes = useStyles();
	return (
		<div className='justForYou'>
			<CssBaseline />
			<h4 variant='h4' className='justForYou__heading'>
				Just For You
			</h4>

			<div className={classes.root}>
				<Grid container className={classes.grid}>
					{cartData.map((cart) => (
						<Card
							key={cart.id}
							className='justForYou__cart'
							// style={{ margin: "10px !important" }}
						>
							<CardContent>
								<Link to='/products'>
									<img
										src={cart.image}
										alt={cart.title}
										style={{ height: "100%", width: "100%" }}
									/>
								</Link>
								<Typography
									align='center'
									variant='h5'
									style={{ color: "#16243e" }}
								>
									{cart.title}
								</Typography>
								<Typography align='center' className='justForYouCart_info'>
									{cart.price}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</div>
			<Box className='box rightBox' component='span' m={1}>
				<Button className='justForYou__btn' variant='contained' size='medium'>
					<Link
						to='/products'
						style={{ textDecoration: "none", color: "#fff" }}
					>
						See More
					</Link>
				</Button>
			</Box>
		</div>
	);
};

export default JustForYou;
