import { CssBaseline, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
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

	return (
		<div className='featureCategory'>
			<CssBaseline />
			<Typography variant='h4' className='featureCategory__heading'>
				Feature Cateogy
			</Typography>

			<div
				className='featureCategory__cartBanner'
				style={{ display: "flex", margin: "auto 50px" }}
			>
				<img className='featureCategory__cartImage' src={addImage} alt='img' />

				<Carousel
					breakPoints={breakPoints}
					className='featureCategory__carousel'
				>
					<Item>
						<img
							alt='img'
							src={featuredCategory1}
							className='featureCategoryCarousel__images'
						/>
					</Item>
					<Item>
						<img
							alt='img'
							src={featuredCategory2}
							className='featureCategoryCarousel__images'
						/>
					</Item>
					<Item>
						<img
							alt='img'
							src={featuredCategory1}
							className='featureCategoryCarousel__images'
						/>
					</Item>
					<Item>
						<img
							alt='img'
							src={featuredCategory3}
							className='featureCategoryCarousel__images'
						/>
					</Item>
					<Item>
						<img
							alt='img'
							src={featuredCategory1}
							className='featureCategoryCarousel__images'
						/>
					</Item>
				</Carousel>
			</div>
		</div>
	);
};

export default FeatureCateogy;
