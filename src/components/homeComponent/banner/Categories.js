import React from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";

const Category = [
	{ id: 1, title: "Kitchen Appliances", link: "/products" },
	{ id: 2, title: "Electronic Devices", link: "/products" },
	{ id: 3, title: "Home & Lifestyle", link: "/products" },
	{ id: 4, title: "Womens Collection", link: "/products" },
	{ id: 5, title: "Mens Collection", link: "/products" },
	{ id: 6, title: "Kids Collection", link: "/login" },
];

const Categories = ({ customCateogry }) => {
	return (
		<>
			<div className='banner__category' style={customCateogry}>
				<List className='bannerCategory__list'>
					<h3 style={{ fontSize: "2rem" }}>CATEGORIES</h3>
					{Category.map((category) => (
						<ListItemText key={category.id}>
							<Link to={category.link} className='bannerCategoryList__content'>
								{category.title}
							</Link>
						</ListItemText>
					))}
				</List>
			</div>
		</>
	);
};

export default Categories;
