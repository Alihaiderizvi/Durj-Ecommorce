import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import { useEffect } from "react";

const Category = [
	{ id: 1, title: "Kitchen Appliances", link: "/products" },
	{ id: 2, title: "Electronic Devices", link: "/products" },
	{ id: 3, title: "Home & Lifestyle", link: "/products" },
	{ id: 4, title: "Womens Collection", link: "/products" },
	{ id: 5, title: "Mens Collection", link: "/products" },
	{ id: 6, title: "Kids Collection", link: "/login" },
];

const test = name.map((a) => {
	return a.subCateory.map((sub) => {
		return sub;
	});
});

console.log("test", test[0]);
console.log("name", name);

const SubCategrories = ({ id }) => {
	return (
		<>
			{id !== null ? (
				<div className='customCssSubCategory'>
					<List className='bannerCategory__listTwo'>
						{id !== null ? (
							test[id].map((category) => (
								<ListItemText key={category?.id}>
									<p
										to={category?.link}
										onClick={() => console.log(category.items)}
										className='bannerCategoryList__contentTwo'
									>
										{category?.title}
									</p>
								</ListItemText>
							))
						) : (
							<></>
						)}
					</List>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default SubCategrories;
