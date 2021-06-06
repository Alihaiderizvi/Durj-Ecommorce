import React from "react";
import banner1 from "../../../assets/category_Products_banner.png";
import banner2 from "../../../assets/slider.png";
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
		img: banner1,
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
		img: banner2,
	},
];
const productsHeader = () => {
	return <div className='products__header'></div>;
};

export default productsHeader;
