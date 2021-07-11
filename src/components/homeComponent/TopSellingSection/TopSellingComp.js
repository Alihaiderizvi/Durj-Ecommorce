// React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Css
import "./TopSellingComp.css";
// Assets
import product1 from "../../../assets/TS1.jpg";
import product2 from "../../../assets/TS2.jpg";
// Material Ui Icons
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Material Ui Core
import { Box, Button, Modal, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const products = [
	{
		id: 1,
		name: "Macbook Pro 2020",
		image: product1,
		price: "$2999",
		type: "Laptop",
		details: "8th Gen Intel Core i5 Processor 1.4GHz up to 3.9GHz Processor",
	},
	{
		id: 2,
		name: "Nikon D3200",
		image: product2,
		price: "$1600",
		type: "Camera",
		details:
			"Nikon D3200 24.2 MP CMOS Digital SLR with 18-55mm f/3.5-5.6 Auto Focus",
	},
];

const StyledRating = withStyles({
	iconFilled: {
		color: "#2E5F82",
		marginRight: "10px",
	},
	iconHover: {
		color: "#2E5F82",
	},
})(Rating);

const TopSellingComp = () => {
	// Modal
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// Quantity Bar
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
			<div className='topSellingComp'>
				<h1 className='topSellings__heading'>Top Sellings</h1>
				<Box className='box rightBox' component='span' m={1}>
					<Button
						className='topSellingComp__SeeMorebtn'
						variant='contained'
						size='medium'
						style={{ background: "#16243e" }}
					>
						<Link
							to='/products'
							style={{ textDecoration: "none", color: "#fff" }}
						>
							See More
						</Link>
					</Button>
				</Box>
				<div className='topSelling__Products'>
					{products.map((product) => (
						<div className='topSelling__ProductWrapper' key={product.id}>
							{/* Product */}
							<section>
								<div className='topSelling__Product'>
									<IconButton className='topSellingCart__Icon'>
										<ShoppingCartOutlinedIcon style={{ color: "Black" }} />
									</IconButton>
									<div className='topSellingProduct__Image'>
										<img src={product.image} alt={product.name} />
									</div>
								</div>
								<div className='topSelling__QucikView'>
									<Modal
										className='wishlist__modal'
										open={open}
										onClose={handleClose}
										closeAfterTransition
										BackdropComponent={Backdrop}
										BackdropProps={{
											timeout: 500,
										}}
									>
										<Fade in={open}>
											<div className='wishlistModal__paper'>
												<h2>Quick View Modal</h2>
												<p>Some Dummy Text.</p>
											</div>
										</Fade>
									</Modal>
									<Button
										className='topSellingQuickView__Btn'
										onClick={handleOpen}
									>
										Quick View
									</Button>
								</div>
							</section>
							{/* Prdouct Details  */}
							<div className='topSelling__ProductDetails'>
								<div className='topSellingProductDetails__wrapper'>
									<h3>{product.name}</h3>
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
									<h3>{product.type}</h3>
									<div className='topSellingProduct__description'>
										<p>{product.details}</p>
									</div>
									<h4 className='topSellingProduct__QuantityPrice'>
										<Link to='/' style={{ textDecoration: "none" }}>
											Price $19.99
										</Link>
									</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default TopSellingComp;
