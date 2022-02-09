import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import SubCategrories from "./SubCategrories";
import { get, post, URL } from "../../../services/Api";
import axios from "axios";
import { MdDevices } from "react-icons/md";
const Categories = ({ customCateogry, title, data }) => {
	console.log("navbar data", data);
	const [categoryData, setCategoryData] = useState([]);
	const [subCatShow, setSubCatShow] = useState(false);
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
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}
								onClick={() => {
									setId(category.category_id);
									setSubCatShow(true);
								}}
							>
								{/* <MdDevices style={{ marginRight: "25px" }} /> */}
								<img
									src={category?.category_icon}
									alt=''
									style={{ marginRight: "20px" }}
								/>
								<p className='bannerCategoryList__content'>
									{category.category_name}
								</p>
							</div>
						</ListItemText>
					))}
				</List>
			</div>
			<SubCategrories
				data={categoryData}
				id={id}
				subCatShow={subCatShow}
				setSub={setSubCatShow}
			/>
		</>
	);
};

export default Categories;
