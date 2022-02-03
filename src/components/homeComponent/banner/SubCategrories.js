import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import { useEffect } from "react";

const SubCategrories = ({ id, data }) => {
	// const test2 = data.map((a) => {
	// 	return a;
	// });

	console.log("object", data);
	console.log(id);

	// return;
	const test2 = data.map((f) => f.subcategories.map((r) => r.subcategory_name));
	console.log("object 2 ", test2[id]);
	return (
		<>
			{/* {id !== null ? (
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
			)} */}
		</>
	);
};

export default SubCategrories;
