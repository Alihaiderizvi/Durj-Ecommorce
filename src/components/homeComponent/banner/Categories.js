import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import SubCategrories from "./SubCategrories";
import { get, post, URL } from "../../../services/Api";
import axios from "axios";

const Categories = ({ customCateogry, title, data }) => {
	console.log("navbar data", data);
	const [categoryData, setCategoryData] = useState([]);
	const [categoryData2, setCategoryData2] = useState([]);
	const [id, setId] = useState(null);
	console.log("id", id);

	useEffect(() => {
		getNavbar();
	}, []);

	const getNavbar = async () => {
		await axios
			.get(URL.navbar)
			.then((res) => setCategoryData(res?.data))
			.catch((err) => console.log("Error", err));
	};

	console.log("navbar cat", categoryData);

	return (
		<>
			<div className='banner__category' style={customCateogry}>
				<List className='bannerCategory__list'>
					<h3 style={{ fontSize: "2rem" }}>{title}</h3>
					{categoryData?.map((category, index) => (
						<ListItemText key={index}>
							<p
								onClick={() => setId(category.category_id)}
								// onMouseOut={() => setId(null)}
								className='bannerCategoryList__content'
							>
								{category.category_name}
							</p>
						</ListItemText>
					))}
				</List>
			</div>
			<SubCategrories
				data={categoryData}
				id={id}
				customCssSubCategory={customCssSubCategory}
			/>
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
