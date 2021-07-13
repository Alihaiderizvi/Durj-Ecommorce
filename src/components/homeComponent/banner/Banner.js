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
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp",
	},
	{
		id: 6,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB18bZYWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg",
	},
];

const Categories = [
	{
		id: 1,
		title: "Kitchen Appliances",
		link: "/products",
	},
	{
		id: 2,
		title: "Electronic Devices",
		link: "/products",
	},
	{
		id: 3,
		title: "Home & Lifestyle",
		link: "/products",
	},
	{
		id: 4,
		title: "Womens Collection",
		link: "/products",
	},
	{
		id: 5,
		title: "Mens Collection",
		link: "/products",
	},
	{
		id: 6,
		title: "Kids Collection",
		link: "/login",
	},
];

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__category'>
				<List className='bannerCategory__list'>
					<h3 style={{ fontSize: "2rem" }}>CATEGORIES</h3>
					{Categories.map((category) => (
						<ListItemText key={category.id}>
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
						<img src={item.img} alt='Carousel' />
					</div>
				))}
			</Carousel>
		</div>
	);
};
export default Banner;
