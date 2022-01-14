import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import banner2 from "../../../assets/slider.png";
import banner1 from "../../../assets/category_Products_banner.png";
import "../banner/Banner.css";
import Categories from "./Categories";
import name from "./data.json";
import SubCategrories from "./SubCategrories";

const images = [
	{ id: 1, img: banner1 },
	{ id: 2, img: banner2 },
	{
		id: 3,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp",
	},
	{ id: 4, img: banner2 },
	{
		id: 5,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp",
	},
	{
		id: 6,
		img: "https://laz-img-cdn.alicdn.com/images/ims-web/TB18bZYWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg",
	},
];

const Category = [
	{ id: 1, title: "Kitchen Appliances", link: "/products" },
	{ id: 2, title: "Electronic Devices", link: "/products" },
	{ id: 3, title: "Home & Lifestyle", link: "/products" },
	{ id: 4, title: "Womens Collection", link: "/products" },
	{ id: 5, title: "Mens Collection", link: "/products" },
	{ id: 6, title: "Kids Collection", link: "/login" },
];
const SubCategory = [
	{ id: 1, title: "Kitchen Appliances", link: "/products" },
	{ id: 2, title: "Electronic Devices", link: "/products" },
	{ id: 3, title: "Home & Lifestyle", link: "/products" },
	{ id: 4, title: "Womens Collection", link: "/products" },
	{ id: 5, title: "Mens Collection", link: "/products" },
	{ id: 6, title: "Kids Collection", link: "/login" },
];

const Banner = () => {
	const [showCategory, setShowCategory] = useState(
		window.innerWidth > 1165 ? true : false
	);

	useEffect(() => {
		const eventHandler = () => {
			if (window.innerWidth > 1165) {
				setShowCategory(true);
			} else {
				setShowCategory(false);
			}
		};
		window.addEventListener("resize", eventHandler);
	}, []);

	return (
		<div className='banner'>
			{showCategory && (
				<Categories title='Categories' data={name} customCateogry={customCss} />
			)}
			{/* {showCategory && <SubCategrories customCateogry={customCssSubCategory} />} */}
			{/* {showCategory && (
				<Categories data={Category} customCateogry={customCssSubCategory} />
			)} */}
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

const customCss = {
	display: "flex",
	justifyContent: "center",
	width: "30%",
};
