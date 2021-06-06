import { List, ListItemText } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import banner2 from "../../../assets/slider.png";
import banner1 from "../../../assets/category_Products_banner.png";
import "../banner/Banner.css";
import { Link } from "react-router-dom";

const images = [
	{
		id: 1,
		img: banner1,
	},
	{
		id: 2,
		img: banner2,
	},
	{
		id: 3,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp",
	},
	{
		id: 4,
		img: banner2,
	},
	{
		id: 5,
		img: banner1,
	},
	{
		id: 6,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB18bZYWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg",
	},
];
const Banner = () => {
	const Categories = [
		{
			id: 1,
			title: "Kitechen Appliances",
			link: "/",
		},
		{
			id: 2,
			title: "Electronic Devices",
			link: "/",
		},
		{
			id: 3,
			title: "Home & Lifestyle",
			link: "/",
		},
		{
			id: 4,
			title: "Womens Collection",
			link: "/",
		},
		{
			id: 5,
			title: "Mens Collection",
			link: "/",
		},
		{
			id: 6,
			title: "Kids Collection",
			link: "/login",
		},
	];

	return (
		<div className='banner'>
			{/* <div className='banner__heading'>
			</div> */}
			<div className='banner__category'>
				<List className='bannerCategory__list'>
					<h3>Categories</h3>
					{Categories.map((category) => (
						<ListItemText>
							<Link to={category.link} className='bannerCategoryList__content'>
								{category.title}
							</Link>
						</ListItemText>
					))}
				</List>
			</div>
			<Carousel
				className='image__carousel'
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				selectedItem={false}
				showIndicators={true}
				infiniteLoop
				autoPlay={true}
			>
				{images.map((item) => (
					<div className='image__slider' key={item.id}>
						<img src={item.images} />
					</div>
				))}
			</Carousel>
		</div>
	);
};
export default Banner;
