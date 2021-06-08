import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import ShopIcon from "@material-ui/icons/Shop";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import mainImage from "../../assets/product1.jpg";
import "../productDetail/ProductDetail.css";
import { withStyles } from "@material-ui/styles";
import DetailTabBar from "./DetailTabBar";

const ProductDetail = () => {
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
			<Grid container className='productDetail'>
				<div item className='productDetail_leftSection'>
					<div className='productDetail__mainImage'>
						<img src={mainImage} />
					</div>
					<div className='ProductDetail__imgs'>
						<img src={mainImage} />
						<img src={mainImage} />
						<img src={mainImage} />
						<img src={mainImage} />
					</div>
				</div>
				<div item className='productDetail_RightSection'>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: "#16243e", fontWeight: "550", marginTop: "20px" }}
					>
						PRODUCT NAME
					</Typography>

					{/* Ratings */}
					<Box
						borderColor='transparent'
						style={{ display: "flex", alignItems: "center", margin: "15px 0" }}
					>
						<StyledRating
							name='customized-color'
							defaultValue='3'
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
					<div style={{ margin: "10px auto" }}>
						{["black", "#2C6193", "#B73A49", "#F60300"].map((item) => (
							<span class='dot' style={{ backgroundColor: item }}></span>
						))}
					</div>

					{/* Size  */}
					<Typography gutterBottom>Size:</Typography>
					<div className='productDetail__sizeBtn'>
						<button className='btn'>S</button>
						<button className='btn'>M</button>
						<button className='btn'>L</button>
					</div>

					{/* Product Price */}
					<Typography
						gutterBottom
						style={{ color: "#16243e", fontWeight: "600", margin: "10px 0" }}
					>
						Rs 5,000 PKR
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
						>
							Buy Now
						</Button>
						<Button
							variant='contained'
							style={{
								backgroundColor: "#16243e",
								color: "#fff",
								marginLeft: "15px",
							}}
							startIcon={<AddShoppingCartIcon />}
						>
							Add to cart
						</Button>
					</div>
				</div>
			</Grid>
			<DetailTabBar />
		</>
	);
};

export default ProductDetail;
