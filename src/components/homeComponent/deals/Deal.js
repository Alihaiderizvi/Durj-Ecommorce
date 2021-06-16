import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../deals/Deal.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import deal1 from "../../../assets/Deal1.png";
import deal2 from "../../../assets/deal2.png";
import deal3 from "../../../assets/deal3.png";

const Deal = () => {
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

	return (
		<div className='deal'>
			<h3 className='deal__heading'>Deals</h3>

			<Carousel breakPoints={breakPoints} className='deal__carousel'>
				{carouselImages.map((item) => (
					<Item key={item.id}>
						<img src={item.image} alt='dealImage' />
					</Item>
				))}
			</Carousel>
		</div>
	);
};

export default Deal;
