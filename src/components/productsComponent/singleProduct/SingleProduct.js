import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Box, Card, IconButton, Typography } from "@material-ui/core";
import c1 from "../../../assets/c1.jpg";
import { Pagination } from "@material-ui/lab";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "../singleProduct/SingleProduct.css";
import CartModal from "../singleProduct/CartModal";
import axios from "axios";
import { URL } from "../../../services/Api";
import { Link, useHistory, useParams } from "react-router-dom";
import {
	selectedProduct,
	// addProductToCart,
	setProducts,
} from "../../../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
const datas = [
	{
		id: 1,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 2,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 3,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 4,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 5,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 6,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 7,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 8,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 9,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 10,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 11,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 12,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 13,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 14,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 15,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 16,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 17,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 18,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 19,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 20,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
	{
		id: 20,
		image: c1,
		label: "Product Name",
		price: "Rs 19.99$",
	},
];

const useStyles = makeStyles((theme) => ({
	media: {
		height: "70%",
		width: "100%",
		marginBottom: "-45px",
		objectFit: "contain",
		position: "relative",
		bottom: "40px",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff !important",
	},
	modalPaper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[2],
		padding: theme.spacing(2, 4, 3),
	},
}));

const firstIndex = 0;

const SingleProduct = () => {
	const classes = useStyles();
	const params = useParams();
	const dispatch = useDispatch();
	console.log("params", params.productId);
	const [product, setProduct] = useState();
	const getProduct = async () => {
		await axios
			.get(`${URL.product}/${params.productId}`)
			.then((res) => {
				console.log("res single", res?.data?.data[0]);
				setProduct(res?.data?.data);
				dispatch(selectedProduct(res?.data?.data[0]));
			})
			.catch((err) => console.log("Error", err));
	};
	console.log("pro", product);
	useEffect(() => {
		getProduct();
	}, []);

	// -----------------------Pagination

	const [pageSize] = useState(16);
	const [page, setPage] = useState(1);
	const [data, setData] = useState(datas.slice(firstIndex, pageSize));
	const [counter, setCounter] = useState();

	useEffect(() => {
		setData(datas.slice(0, pageSize));
	}, [pageSize]);

	const handlePageChange = (event, value) => {
		setPage(value);
		setData(datas.slice(firstIndex + pageSize * (value - 1), pageSize * value));
	};

	// -----------------------Sort
	const [sort, setSort] = useState("");

	const handleChange = (event) => {
		setSort(event.target.value);
	};

	return (
		<div className='singleProduct'>
			<Box className='box rightBox' m={1}>
				<FormControl style={{ minWidth: 120 }}>
					<InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
					<Select id='sort_selection' value={sort} onChange={handleChange}>
						<MenuItem value={10}>Option One</MenuItem>
						<MenuItem value={20}>Option Two</MenuItem>
						<MenuItem value={30}>Option Three</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<div className='Cart'>
				{product?.length > 0 ? (
					product.map((item) => (
						<div className='cartItem_Wrapper'>
							<div className='CartItem_Button'>
								<IconButton
									onClick={() => {
										setCounter(counter + 1);
										dispatch({
											type: "ADD_PRODUCT_TO_CART",
											payload: { product, counter },
										});
									}}
								>
									<ShoppingCart />
								</IconButton>
							</div>
							<div className='cartItemImage_Wrapper'>
								<img
									className='cartItem_Image'
									src={item?.image_url}
									alt={item?.brand}
								/>
							</div>
							<CartModal />
							<div className='cartItem_Info'>
								<h4 className='cartItem_name'> {item?.brand}</h4>
								<p className='cartItem_price'>
									Rs {parseFloat(item?.actual_price).toFixed(2)}
								</p>
								<Link className='cartItem_details' to={`/product/${item?.id}`}>
									Get Deatils
								</Link>
							</div>
						</div>
					))
				) : (
					<h2>This Product is out of stock</h2>
				)}
			</div>
			<Box className='box rightBox' style={{ marginTop: "15px" }}>
				<Pagination
					count={Math.ceil(datas.length / pageSize)}
					page={page}
					onChange={handlePageChange}
				/>
			</Box>
		</div>
	);
};

export default SingleProduct;
