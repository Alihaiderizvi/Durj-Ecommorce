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
import { ImCross } from "react-icons/im";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// Material Ui Core
import { Box, Button, Modal, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopIcon from "@material-ui/icons/Shop";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { post, URL } from "../../../services/Api";

// Toast Notification
import { toast } from "react-toastify";

const products = [
	{
		id: 1,
		name: "Macbook Pro 2020",
		image_url: product1,
		price: 130000,
		type: "Laptop",
		details: "8th Gen Intel Core i5 Processor 1.4GHz up to 3.9GHz Processor",
	},
	{
		id: 2,
		name: "Nikon D3200",
		image_url: product2,
		price: 50000,
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
	const [counter, setCounter] = useState();
	const dispatch = useDispatch();
	const isLogin = useSelector((state) => state?.user?.isLogin);
	const product = useSelector((state) => state.product);
	const user = useSelector((state) => state?.user?.user);

	const notify = (message) => {
		toast.success(message, {
			position: "bottom-left",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	};

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

	const handleWishList = () => {
		let dataToSend = {
			product_id: product?.id,
			customer_id: user?.id,
		};
		post(URL.addWishlist, dataToSend)
			.then((res) => {
				console.log("res", res);
				notify("Product Added To Wishlist");
			})
			.catch((err) => console.error(err));
	};

	const handleReservation = () => {
		let dataToSend = {
			product_id: product?.id,
			customer_id: user?.id,
		};
		post(URL.addReservation, dataToSend)
			.then((res) => {
				console.log("res", res);
				notify("Product Reserved For 30Days.");
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<div className='topSellingComp'>
				<h1 className='topSellings__heading'>Top Sellings</h1>

				<div className='topSelling__Products'>
					{products.map((product) => (
						<div className='topSelling__ProductWrapper' key={product.id}>
							{/* Product */}
							<section>
								<div className='topSelling__Product'>
									<IconButton className='topSellingCart__Icon'>
										<ShoppingCartOutlinedIcon
											style={{ color: "Black" }}
											onClick={() => {
												setCounter(counter + 1);
												dispatch({
													type: "ADD_PRODUCT_TO_CART",
													payload: { product, counter },
												});
											}}
										/>
									</IconButton>
									<div className='topSellingProduct__Image'>
										<img src={product.image_url} alt={product.name} />
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
											<div className='quickview'>
												<div className='quickviewImage_Wrapper'>
													<img
														className='quickview_Image'
														src={product?.image_url}
														alt={product.name}
													/>
												</div>
												<div className='quickview_info'>
													<IconButton
														className='quickviewInfo_cancelBtn'
														onClick={handleClose}
													>
														<ImCross
															style={{
																fontSize: "20px",
																color: "#f50057",
																cursor: "pointer",
															}}
														/>
													</IconButton>
													<h1 className='quickviewInfo_name'>
														{product?.name}
													</h1>
													<p className='quickviewInfo_details'>
														{product?.details}
													</p>
													<p className='quickviewInfo_price'>
														Rs.{parseFloat(product?.price).toFixed(2)}
													</p>

													<div className='quickviewButton'>
														<Button
															variant='contained'
															style={{
																backgroundColor: "#002347",
																color: "#fff",
																fontWeight: "500",
															}}
															startIcon={<AddShoppingCartIcon />}
															onClick={() => {
																setCounter(counter + 1);
																dispatch({
																	type: "ADD_PRODUCT_TO_CART",
																	payload: { product, counter },
																});
															}}
														>
															Add to cart
														</Button>
													</div>
													{isLogin && (
														<div className='quickviewOptional_btns'>
															<Button
																variant='contained'
																color='secondary'
																startIcon={<ShopIcon />}
																style={{
																	backgroundColor: "#002347",
																}}
																onClick={handleWishList}
															>
																<Link
																	style={{
																		color: "#fff",
																		textDecoration: "none",
																		fontWeight: "500",
																	}}
																>
																	Add To WishList
																</Link>
															</Button>
															<Button
																variant='contained'
																style={{
																	backgroundColor: "#ff4f4f",
																	color: "#fff",
																	fontWeight: "500",
																	marginLeft: "15px",
																}}
																startIcon={<AddShoppingCartIcon />}
																onClick={handleReservation}
															>
																Reserve
															</Button>
														</div>
													)}
												</div>
											</div>
										</Fade>
									</Modal>
									<Button
										className='topSellingQuickView__Btn'
										onClick={handleOpen}
										fullWidth
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

				<Box className='box rightBox topSelling__rightbox' component='span'>
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
			</div>
		</>
	);
};

export default TopSellingComp;
