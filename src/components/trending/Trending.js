import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Grid, Typography } from "@material-ui/core";

import cat1 from "../../assets/shopcategory1.png";
import cat2 from "../../assets/shopcategory2.png";
import cat3 from "../../assets/shopcategory3.png";
import cat4 from "../../assets/shopcategory4.png";

import "../trending/Trending.css";
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 986, itemsToShow: 4 },
];

const carouselImages = [
	{
		id: 1,
		image: cat1,
	},
	{
		id: 2,
		image: cat2,
	},
	{
		id: 3,
		image: cat3,
	},
	{
		id: 4,
		image: cat4,
	},
	{
		id: 5,
		image: cat1,
	},
];
const Trending = () => {
	return (
		<div className='trending'>
			<Typography
				variant='h4'
				gutterBottom
				className='trending__heading'
				align='center'
			>
				You May Also Like
			</Typography>

			<Grid style={{ margin: "3rem 0px 1rem 0px" }}>
				<Carousel breakPoints={breakPoints} className='trending__carousel'>
					{carouselImages.map((item) => (
						<Item key={item.id} style={{ height: "230px", margin: "0 15px" }}>
							<img
								src={item.image}
								alt='img'
								style={{ height: "100%", width: "100%" }}
							/>
						</Item>
					))}
				</Carousel>
			</Grid>
		</div>
	);
};

export default Trending;
