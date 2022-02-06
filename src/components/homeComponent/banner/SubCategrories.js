import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../../../services/Api";
import { useHistory } from "react-router-dom";

const SubCategrories = ({ id, data }) => {
	// const test2 = data.map((a) => {
	// 	return a;
	// });

	console.log("object", data);
	console.log("id: ", id);
	const [cat, setCat] = useState();
	const handleClick = (category) => {
		setCat(category);
	};
	// return;
	const test2 = data.map((f) => f.subcategories.map((r) => r));
	console.log("object 2 ", cat);
	return (
		<>
			{id !== null ? (
				<div className='customCssSubCategory'>
					<List className='bannerCategory__listTwo'>
						{id !== null ? (
							test2[id - 1].map((category) => (
								<>
									{console.log("cat", category)}
									<ListItemText key={category?.id}>
										<p
											to={category?.link}
											onClick={() => handleClick(category)}
											className='bannerCategoryList__contentTwo'
										>
											{category?.subcategory_name}
										</p>
									</ListItemText>
								</>
							))
						) : (
							<></>
						)}
					</List>
				</div>
			) : (
				<></>
			)}
			<ProductType category={cat} />
		</>
	);
};

const ProductType = ({ category }) => {
	// console.log("Category ID:", category?.subcategory_id);
	// console.log("Product ID:", category?.product_types[0]?.sub_category_id);
	// console.log(
	// 	"name",
	// 	category?.product_types.map((nam) => nam.name)
	// );

	const handleProduct = (p) => {
		console.log("p", p);
	};
	return (
		<div className='customCssSubCategory'>
			<List className='bannerCategory__listTwo'>
				{category?.subcategory_id ===
					category?.product_types[0]?.sub_category_id &&
					category?.product_types.map((product) => (
						<ListItemText>
							<p
								className='bannerCategoryList__contentTwo'
								onClick={handleProduct(product)}
							>
								<Product item={product} />
							</p>
						</ListItemText>
					))}
			</List>
		</div>
	);
};

const Product = ({ item }) => {
	const [id, setID] = useState();
	const history = useHistory();
	const getID = async (itemId) => {
		await history.push(`product-type/${itemId}`);
	};
	console.log("id", item?.id);
	return <p onClick={() => getID(item?.id)}>{item?.name}</p>;
};
export default SubCategrories;
