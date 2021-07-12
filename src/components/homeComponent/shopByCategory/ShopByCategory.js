import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../shopByCategory/ShopByCategory.css";

import cat1 from "../../../assets/shopcategory1.png";
import cat2 from "../../../assets/shopcategory2.png";
import cat3 from "../../../assets/shopcategory3.png";
import cat4 from "../../../assets/shopcategory4.png";

const ShopByCategory = () => {
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

	return (
		<div className='shopByCategory'>
			<CssBaseline />
			<h4 gutterBottom className='shopByCategory__heading'>
				Shop By Category
			</h4>

			<Grid container style={{ margin: "3rem 0px 1rem 0px" }}>
				<Carousel
					breakPoints={breakPoints}
					className='shopByCategory__carousel'
				>
					{carouselImages.map((item) => (
						<Item key={item.id} style={{ height: "230px" }}>
							<img
								src={item.image}
								alt='Category Carousel'
								style={{ height: "100%", width: "100%" }}
							/>
						</Item>
					))}
				</Carousel>
			</Grid>
		</div>
	);
};

export default ShopByCategory;
