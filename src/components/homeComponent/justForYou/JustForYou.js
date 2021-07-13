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

import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
import p5 from "../../../assets/p5.jpg";
import p6 from "../../../assets/p6.jpg";
import p7 from "../../../assets/p7.jpg";
import p8 from "../../../assets/p8.jpg";
import p9 from "../../../assets/p9.jpg";
import p10 from "../../../assets/p10.jpg";
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
		{ id: 1, image: p1, title: "Nike Air Force", price: "Rs.1,500 PKR" },
		{ id: 2, image: p2, title: "Sony Go pro", price: "Rs.35,000 PKR" },
		{ id: 3, image: p3, title: "Apple Watch 6", price: "Rs.20,000 PKR" },
		{ id: 4, image: p4, title: "Sunglasses", price: "Rs.3,500 PKR" },
		{ id: 5, image: p5, title: "Headset", price: "Rs.2,399 PKR" },
		{ id: 6, image: p6, title: "Chanel perfume", price: "Rs.5,000 PKR" },
		{ id: 7, image: p7, title: "Sony Xbox", price: "Rs.85,000 PKR" },
		{ id: 8, image: p8, title: "Citizen Watch", price: "Rs.25,000 PKR" },
		{ id: 9, image: p9, title: "Go Pro", price: "Rs.15,000 PKR" },
		{ id: 10, image: p10, title: "Outfitter Shirt", price: "Rs.2,000 PKR" },
	];

	const classes = useStyles();
	return (
		<div className='justForYou'>
			<CssBaseline />
			<h4 variant='h4' className='justForYou__heading'>
				Just For You
			</h4>

			<div className={classes.root}>
				<Grid container className={classes.grid} justify='space-between'>
					{cartData.map((cart) => (
						<Card
							key={cart.id}
							className='justForYou__cart'
							// style={{ margin: "10px !important" }}
						>
							<CardContent>
								<div
									style={{
										height: "230px",
										width: "250px",
									}}
								>
									<Link to='/products'>
										<img
											src={cart.image}
											alt={cart.title}
											style={{
												height: "100%",
												width: "100%",
												objectFit: "cover",
											}}
										/>
									</Link>
								</div>
								<Typography
									align='center'
									variant='h5'
									style={{
										color: "#16243e",
										fontFamily: "Bebas Neue",
										fontSize: "1.8rem",
										margin: "8px 0px",
									}}
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
			<Box
				className='box JustForYou__rightBox'
				component='span'
				style={{ margin: "auto" }}
			>
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
