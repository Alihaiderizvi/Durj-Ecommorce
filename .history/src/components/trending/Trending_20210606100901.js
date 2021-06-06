import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Grid } from "@material-ui/core";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
];

const carouselImages = [
	{
		id: 1,
		image: deal1,
	},
	{
		id: 2,
		image: deal3,
	},
	{
		id: 3,
		image: deal2,
	},
	{
		id: 4,
		image: deal1,
	},
	{
		id: 5,
		image: deal3,
	},
];

const Trending = () => {
	return (
		<div className='trending'>
			<CssBaseline />
			<Typography
				variant='h4'
				gutterBottom='true'
				className='shopByCategory__heading'
			>
				Shop By Category
			</Typography>

			<Grid container justify='center'>
				<Carousel
					breakPoints={breakPoints}
					className='shopByCategory__carousel'
				>
					{carouselImages.map((item) => (
						<Item key={item.id}>
							<img src={item.image} />
						</Item>
					))}
				</Carousel>
			</Grid>
		</div>
	);
};

export default Trending;
