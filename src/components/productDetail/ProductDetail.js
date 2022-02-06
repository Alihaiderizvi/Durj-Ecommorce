import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import ShopIcon from "@material-ui/icons/Shop";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "../productDetail/ProductDetail.css";
import { withStyles } from "@material-ui/styles";
import DetailTabBar from "./DetailTabBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
} from "../../redux/actions/ProductActions";
import { URL } from "../../services/Api";

const ProductDetail = () => {
	// Fetching product
	const product = useSelector((state) => state.product);
	console.log("product", product);
	const { image_url, title, actual_price, description } = product;
	const { productId } = useParams();

	const dispatch = useDispatch();

	const fetchProductDetail = async (id) => {
		const res = await axios
			// .get(`https://fakestoreapi.com/products/${id}`)
			.get(`${URL.productDetails}/${id}`)
			.catch((err) => {
				console.log("Error:", err);
			});
		console.log("res", res?.data?.data);
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail(productId);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]);

	// Product Ratings
	const StyledRating = withStyles({
		iconFilled: {
			color: "#2E5F82",
			marginRight: "10px",
		},
		iconHover: {
			color: "#2E5F82",
		},
	})(Rating);

	// Product: Quantity

	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
		if (setCount < 0) {
			return 0;
		}
	};

	return (
		<>
			{Object.keys(product).length === 0 ? (
				<h1 style={{ textAlign: "center", fontFamily: "Bebas Neue" }}>
					Loading...
				</h1>
			) : (
				<Grid container className='productDetail'>
					<div item className='productDetail_leftSection'>
						<div className='productDetail__mainImage'>
							<img src={image_url} alt={title} />
						</div>
						<div className='ProductDetail__imgs'>
							<img src={image_url} alt={title} />
							<img src={image_url} alt={title} />
							<img src={image_url} alt={title} />
							<img src={image_url} alt={title} />
						</div>
					</div>
					<div item className='productDetail_RightSection'>
						<Typography
							variant='h5'
							gutterBottom
							style={{
								color: "#16243e",
								fontWeight: "550",
								marginTop: "20px",
								fontFamily: "Bebas Neue",
							}}
						>
							{title}
						</Typography>

						{/* Ratings */}
						<Box
							borderColor='transparent'
							style={{
								display: "flex",
								alignItems: "center",
								margin: "15px 0",
							}}
						>
							<StyledRating
								name='customized-color'
								defaultValue={3}
								precision={0.5}
								emptyIcon={
									<StarOutlineIcon
										fontSize='inherit'
										style={{ marginRight: "10px" }}
									/>
								}
							/>
							<Typography style={{ opacity: "0.7" }}>
								{Rating.value} rating
							</Typography>
						</Box>

						{/* Color */}
						<Typography gutterBottom>Color:</Typography>
						<div style={{}}>
							{["black", "#2C6193", "#B73A49", "#F60300"].map((item) => (
								<span className='dot' style={{ backgroundColor: item }}></span>
							))}
						</div>

						{/* Size  */}
						<Typography>Size:</Typography>
						<div className='productDetail__sizeBtn'>
							<button className='btn'>S</button>
							<button className='btn'>XS</button>
							<button className='btn'>M</button>
							<button className='btn'>L</button>
							<button className='btn'>XL</button>
						</div>

						{/* Product Price */}
						<Typography
							gutterBottom
							style={{
								color: "#ff4f4f",
								fontSize: "22px",
								margin: "10px 0",
								fontFamily: "Bebas Neue",
							}}
						>
							RS. {actual_price} PKR
						</Typography>

						{/* Product Quantity */}
						<Typography gutterBottom>Quantity:</Typography>
						<div className='productDeatails__quantityBar'>
							<button className='productDetails__qyualityBtn'>
								<AddIcon onClick={handleIncrement} />
							</button>
							<Typography
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								{count}
							</Typography>
							<button className='productDetails__qyualityBtn'>
								<RemoveIcon onClick={handleDecrement} />
							</button>
						</div>
						<div className='productDetails__functionalbtns'>
							<Button
								variant='contained'
								color='secondary'
								startIcon={<ShopIcon />}
								style={{
									backgroundColor: "#ff4f4f",
								}}
							>
								<Link
									to='/cart'
									style={{
										color: "#fff",
										textDecoration: "none",
										fontWeight: "500",
									}}
								>
									Buy Now
								</Link>
							</Button>
							<Button
								variant='contained'
								style={{
									backgroundColor: "#002347",
									color: "#fff",
									fontWeight: "500",
									marginLeft: "15px",
								}}
								startIcon={<AddShoppingCartIcon />}
							>
								Add to cart
							</Button>
						</div>
					</div>
				</Grid>
			)}
			<DetailTabBar title={title} description={description} />
		</>
	);
};

export default ProductDetail;
