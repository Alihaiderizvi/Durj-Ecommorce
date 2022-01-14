import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import SubCategrories from "./SubCategrories";

const test = name.map((a) => {
	return a.subCateory.map((sub) => {
		return sub;
	});
});

const Categories = ({ customCateogry, title, data }) => {
	console.log("data", data);
	const [id, setId] = useState(null);
	console.log("id", id);

	return (
		<>
			<div className='banner__category' style={customCateogry}>
				<List className='bannerCategory__list'>
					<h3 style={{ fontSize: "2rem" }}>{title}</h3>
					{data.map((category, index) => (
						<ListItemText key={index}>
							<p
								onClick={() => setId(category.id)}
								// onMouseOut={() => setId(null)}
								className='bannerCategoryList__content'
							>
								{category.title}
							</p>
						</ListItemText>
					))}
				</List>
			</div>
			<SubCategrories id={id} customCssSubCategory={customCssSubCategory} />
		</>
	);
};

const customCssSubCategory = {
	display: "flex",
	justifyContent: "center",
	paddingTop: "6rem",
	overflowY: "scroll",
	width: "30%",
};

export default Categories;
