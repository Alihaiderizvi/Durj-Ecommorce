import { List, ListItemText } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import slider from "../../../assets/slider.png";
import "../banner/Banner.css";
import { Link } from "react-router-dom";

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
							<Link
								Link
								to={category.link}
								className='bannerCategoryList__content'
							>
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
				<div className='image__slider'>
					<img src={slider} />
				</div>
				<div className='image__slider'>
					<img
						src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1QUn2Wlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg'
						alt=''
					/>
				</div>
				<div className='image__slider'>
					<img
						src='https://laz-img-cdn.alicdn.com/images/ims-web/TB18bZYWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg'
						alt=''
					/>
				</div>
				<div className='image__slider'>
					<img
						src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1ZKm_iCslXu8jSZFuXXXg7FXa.jpg_2200x2200Q100.jpg_.webp'
						alt=''
					/>
				</div>
				<div className='image__slider'>
					<img
						src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp'
						alt=''
					/>
				</div>
			</Carousel>
		</div>
	);
};
export default Banner;
