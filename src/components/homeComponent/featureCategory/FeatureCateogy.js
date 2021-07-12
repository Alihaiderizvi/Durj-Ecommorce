import { Link } from "react-router-dom";
import { Button, CssBaseline } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import "../featureCategory/FeatureCateogy.css";
import addImage from "../../../assets/add.png";
import featuredCategory1 from "../../../assets/Featured-Category1.png";
import featuredCategory2 from "../../../assets/Featured-Category2.png";
import featuredCategory3 from "../../../assets/Featured-Category3.png";

const FeatureCateogy = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 750, itemsToShow: 2 },
		{ width: 350, itemsToShow: 3 },
	];

	const Products = [
		{
			image: featuredCategory1,
		},
		{
			image: featuredCategory2,
		},
		{
			image: featuredCategory3,
		},
		{
			image: featuredCategory1,
		},
		{
			image: featuredCategory3,
		},
		{
			image: featuredCategory2,
		},
	];

	return (
		<div className='featureCategory'>
			<CssBaseline />
			<h4 variant='h4' className='featureCategory__heading'>
				Feature Cateogy
			</h4>

			<div className='featureCategory__cartBanner'>
				<div className='featureCategory__cartImage'>
					<img className src={addImage} alt='img' />
				</div>

				<Carousel
					breakPoints={breakPoints}
					className='featureCategory__carousel'
				>
					{Products.map((product, index) => (
						<div className='featuredCat__Images' key={index}>
							<img
								alt='img'
								src={product.image}
								className='featureCategoryCarousel__images'
							/>
							<Button fullWidth className='featuredCat__btn'>
								<Link
									to='/products'
									style={{ textDecoration: "none", color: "#fff" }}
								>
									Shop Now
								</Link>
							</Button>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default FeatureCateogy;
