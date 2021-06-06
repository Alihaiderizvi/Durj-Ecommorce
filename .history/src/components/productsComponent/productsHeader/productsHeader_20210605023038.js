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

const productsHeader = () => {
	return (
		<div className='products__header'>
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
						<img src={item.img} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default productsHeader;
