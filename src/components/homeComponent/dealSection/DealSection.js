// React Dom
import React from "react";
// react Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Assets Import
import deal1 from "../../../assets/Deal1.png";
import deal2 from "../../../assets/deal2.png";
import deal3 from "../../../assets/deal3.png";
// Css
import "./DealSection.css";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

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
const DealSection = () => {
	return (
		<>
			<div className='dealSection__Carousel'>
				<h3 className='dealSection__heading'>Deals</h3>
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={false}
					className=''
					containerClass='container-with-dots'
					dotListClass=''
					draggable
					focusOnSelect={false}
					infinite
					itemClass=''
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					showDots={false}
					sliderClass=''
					slidesToSlide={1}
					swipeable
					responsive={responsive}
				>
					{carouselImages.map((item) => (
						<div className='dealCarousel__Images' key={item.id}>
							<img src={item.image} alt='Carousel ItemImage' />
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default DealSection;
