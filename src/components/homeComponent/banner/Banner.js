import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import banner2 from "../../../assets/slider.png";
import banner1 from "../../../assets/category_Products_banner.png";
import banner_wishlist from "../../../assets/banner-wishlist.jpg";
import banner_sale from "../../../assets/banner-sale.jpg";
import banner_offer from "../../../assets/banner-offer.jpg";
import "../banner/Banner.css";
import Categories from "./Categories";
import name from "./data.json";
import SubCategrories from "./SubCategrories";

const images = [
	{ id: 1, img: banner_sale },
	{ id: 3, img: banner_wishlist },
	{ id: 4, img: banner1 },
	{ id: 5, img: banner_offer },
	// { id: 2, img: banner2 },
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
	minWidth: "22%",
	// width: "30%",
};
