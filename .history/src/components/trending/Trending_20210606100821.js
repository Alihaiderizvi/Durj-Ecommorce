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
			<Grid container></Grid>
		</div>
	);
};

export default Trending;
