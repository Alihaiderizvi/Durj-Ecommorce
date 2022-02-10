import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, List, ListItemText } from "@material-ui/core";
import name from "./data.json";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../../../services/Api";
import { useHistory } from "react-router-dom";
import { BiMobileAlt } from "react-icons/bi";
import { SiDsautomobiles } from "react-icons/si";
import { ImCross } from "react-icons/im";

const SubCategrories = ({ id, data, subCatShow, setSub }) => {
	const [cat, setCat] = useState();
	const [te, setTe] = useState(false);
	const handleClick = (category) => {
		setCat(category);
	};
	const test2 = data.map((f) => f.subcategories.map((r) => r));
	console.log("reqqqqqqqq subCatShow", subCatShow);
	// useEffect(() => {
	// 	if (subCatShow === true) setTe(true);
	// }, [subCatShow]);
	// console.log("reqqqqqqqq te2", te);
	return (
		<>
			{subCatShow === true && id !== null ? (
				<div style={customCssSubCategory}>
					<List
						className='bannerCategory__listTwo'
						style={{ marginTop: "3rem" }}
					>
						{/* <h3 style={{ fontSize: "2rem" }}>Sub-Categories</h3> */}
						<div
							style={{
								textAlign: "end",
								position: "absolute",
								left: "9rem",
								top: "-36px",
							}}
						>
							<IconButton
								onClick={() => {
									setSub(false);
									console.log("reqqqqqqqq te", te);
								}}
								// style={{ positon: "absolute", top: 0, left: "39px" }}
							>
								<ImCross
									style={{
										fontSize: "15px",
										color: "#000",
										cursor: "pointer",
									}}
								/>
							</IconButton>
						</div>
						{id !== null ? (
							test2[id - 1].map((category) => (
								<>
									{console.log("cat", category)}
									<ListItemText key={category?.id}>
										<div
											style={{
												display: "flex",
												// justifyContent: "center",
												alignItems: "center",
											}}
											onClick={() => {
												handleClick(category);
												setTe(true);
											}}
										>
											{/* <BiMobileAlt style={{ marginRight: "2rem" }} /> */}
											<p
												to={category?.link}
												className='bannerCategoryList__contentTwo'
											>
												{category?.subcategory_name}
											</p>
										</div>
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
			{cat !== undefined && (
				<ProductType category={cat} te={te} setTe={setTe} />
			)}
		</>
	);
};

const customCssSubCategory = {
	display: "flex",
	justifyContent: "center",
	overflowY: "auto",
	minWidth: "16%",
	borderLeft: "2px solid #000000",
};
const customCssSubCategory2 = {
	display: "flex",
	justifyContent: "center",
	overflowY: "auto",
	minWidth: "16%",
	borderLeft: "2px solid #000000",
};

const ProductType = ({ category, te, setTe }) => {
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
		<>
			{te === true && (
				<div style={customCssSubCategory2}>
					<List
						className='bannerCategory__listTwo'
						style={{ marginTop: "3rem" }}
					>
						{/* <h3 style={{ fontSize: "2rem" }}>Product Types</h3> */}
						<div
							style={{
								textAlign: "end",
								position: "absolute",
								left: "8rem",
								top: "-36px",
							}}
						>
							<IconButton onClick={() => setTe(false)}>
								<ImCross
									style={{
										fontSize: "15px",
										color: "#000",
										cursor: "pointer",
									}}
								/>
							</IconButton>
						</div>
						{category?.subcategory_id ===
							category?.product_types[0]?.sub_category_id &&
							category?.product_types.map((product) => (
								<ListItemText>
									<div
										style={{
											display: "flex",
											alignItems: "center",
										}}
										onClick={handleProduct(product)}
									>
										{/* <SiDsautomobiles style={{ marginRight: "2rem" }} /> */}
										<p className='bannerCategoryList__contentTwo'>
											<Product item={product} />
										</p>
									</div>
								</ListItemText>
							))}
					</List>
				</div>
			)}
		</>
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
