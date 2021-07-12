// React Imports
import React, { useState } from "react";
// Css
import "./TopSellingComp.css";
// Assets
import product1 from "../../../assets/TS1.jpg";
// Material Ui Icons
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Material Ui Core
import { Box, Typography } from "@material-ui/core";
import { IconButton, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

// const products = [
// 	{
// 		id: 1,
// 		name: "Macbook Pro 2020",
// 		image: product1,
// 		price: "$2999",
// 		type: "Laptop",
// 		details: "8th Gen Intel Core i5 Processor 1.4GHz up to 3.9GHz Processor",
// 	},
// 	{
// 		id: 2,
// 		name: "Nikon D3200",
// 		image: product2,
// 		price: "$1600",
// 		type: "Camera",
// 		details:
// 			"Nikon D3200 24.2 MP CMOS Digital SLR with 18-55mm f/3.5-5.6 Auto Focus",
// 	},
// ];

const StyledRating = withStyles({
	iconFilled: {
		color: "#2E5F82",
		marginRight: "10px",
	},
	iconHover: {
		color: "#2E5F82",
	},
})(Rating);

const TopSellingProduct = ({ products }) => {
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
			<div className='topSelling__ProductWrapper'>
				{/* Product */}
				<div className='topSelling__Product'>
					<IconButton className='topSellingCart__Icon'>
						<ShoppingCartOutlinedIcon style={{ color: "Black" }} />
					</IconButton>
					<div className='topSellingProduct__Image'>
						<img src={product1} alt={products.name} />
					</div>
					<div className='topSelling__QucikView'>
						<button className='topSellingQuickView__Btn'>Quick View</button>
					</div>
				</div>
				{/* Prdouct Details  */}
				<div className='topSelling__ProductDetails'>
					<h3>{products.name}</h3>
					{/* Rating */}
					<div style={{ margin: ".2rem 0" }}>
						{[5].map((item, index) => (
							<Box borderColor='transparent' key={index}>
								<StyledRating
									name='customized-color'
									defaultValue={item}
									precision={0.5}
									emptyIcon={
										<StarOutlineIcon
											fontSize='inherit'
											style={{ marginRight: "10px" }}
										/>
									}
								/>
							</Box>
						))}
					</div>
					{/* Size */}
					<div className='topSellingProductDetails__size'>
						<h3>Size</h3>
						<div className='topSellingProductDetails__sizeBox'>
							<h4 className='topSellingProductDetails__sizeBoxText'>
								2-3 years
							</h4>
							<h4 className='topSellingProductDetails__sizeBoxText'>
								3-4 years
							</h4>
							<h4 className='topSellingProductDetails__sizeBoxText'>
								4-5 years
							</h4>
						</div>
					</div>
					{/* Quantity */}
					<div className='topSellingProductDetails__Qty'>
						<h3>Quantity</h3>
						<div className='topSellingProductDetailsQty__bar'>
							<button className='topSellingProductDetailsQty__btn'>
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
							<button className='topSellingProductDetailsQty__btn'>
								<RemoveIcon onClick={handleDecrement} />
							</button>
						</div>
					</div>
					{/* <h3>{products.type}</h3> */}
					<div className='topSellingProduct__description'>
						{/* <p>{products.details}</p> */}
					</div>
					<h4 className='topSellingProduct__QuantityPrice'>
						<Link to='/' style={{ textDecoration: "none", color: "#fa5051" }}>
							{products.price}
						</Link>
					</h4>
				</div>
			</div>
		</>
	);
};

export default TopSellingProduct;
