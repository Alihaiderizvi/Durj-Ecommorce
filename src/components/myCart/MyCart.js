import React, { useState } from "react";
import {
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Rating } from "@material-ui/lab";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import mainImage from "../../assets/product1.jpg";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { useSelector, useDispatch } from "react-redux";
// Css import
import "../myCart/MyCart.css";
import { useEffect } from "react";
// Services
import { post, URL } from "../../services/Api";

const data = [
	{ id: 1, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 2, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 3, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 4, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 5, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 6, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
];

const RecentView = [
	{ id: 1, img: mainImage, name: "Addidas", price: "Rs.1999 PKR" },
	{ id: 2, img: mainImage, name: "Nike", price: "Rs.1599 PKR" },
];

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

const MyCart = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.shop.products);
	const user = useSelector((state) => state?.user?.user);
	const subTotalPrice = useSelector((state) => state.shop.subTotal);
	const totalQuantity = useSelector((state) => state.shop.totalQty);
	const shopProducts = useSelector((state) => state.shop.products);
	const totalPrice = useSelector((state) => state.shop.totalPrice);
	console.log("toal", subTotalPrice);

	console.log(products);
	const [quantity, setQuantity] = useState(1);

	const CalculatePricePerItem = () => {};
	const [pro, setPro] = useState();
	useEffect(() => {
		const cartItems = async () => {
			let dataToSend = {
				customer_id: user?.id,
			};
			let data = [];
			await post(URL.cart, dataToSend).then((res) => {
				console.log("res cart", res?.customer_cart);
				data = [...products, ...res?.customer_cart];
				setPro(data);
			});
		};
		cartItems();
	}, []);

	console.log("cart", pro);
	return (
		<>
			<Grid className='cart' container justify='center'>
				<Grid
					className='cart__leftDiv'
					item
					xl={6}
					lg={7}
					md={10}
					sm={12}
					xs={12}
				>
					<div className='cart__table'>
						<h4 style={{ fontSize: "40px", fontFamily: "Oswald" }} gutterBottom>
							MY CART
						</h4>
						<Divider />
						<br />
						<Table>
							<br />
							<Thead>
								<Tr>
									<Th style={{ textAlign: "left", fontWeight: "500" }}>
										Product
									</Th>
									<Th style={{ fontWeight: "500" }}>Price</Th>
									<Th style={{ fontWeight: "500" }}>Quantity</Th>
									<Th style={{ fontWeight: "500" }}>TOTAL</Th>
								</Tr>
							</Thead>
							<Tbody>
								{products?.map((product) => (
									<Tr key={product.id}>
										<Td className='cartTable__imageTd'>
											<img
												className='cartTable__image'
												alt='ProductImage'
												src={product.image}
											/>
											<p>{product.title}</p>
										</Td>
										<Td>{product.price}</Td>
										<Td>0</Td>
										<Td style={{ color: "red", fontWeight: "700" }}>0</Td>
										<Td className='cartTable__delBtn'>
											<IconButton
												onClick={() => {
													dispatch({
														type: "REMOVE_ITEM",
														payload: product.id,
													});
												}}
											>
												<DeleteForeverIcon />
											</IconButton>
										</Td>
										<Divider className='divider' />
									</Tr>
								))}
							</Tbody>
						</Table>
					</div>
					<div className='cartLeftDiv_buttons'>
						<Button variant='contained' backgroundColor='#002347'>
							<Link
								to='/'
								style={{
									textDecoration: "none",
									fontWeight: "600",
									color: "#fff",
								}}
							>
								CONTINUE SHOPPING
							</Link>
						</Button>
						<Button variant='contained'>
							<Link
								to='/checkout'
								style={{
									textDecoration: "none",
									fontWeight: "600",
									color: "#fff",
								}}
							>
								PLACE ORDER
							</Link>
						</Button>
					</div>
				</Grid>

				{/* Right Div */}
				<Grid item xl={4} lg={4} sm={10} xs={12} align='left'>
					<div className='cart__rightDiv'>
						<div className='cartRightDiv_global'>
							<Typography
								variant='h6'
								style={{
									color: "#16243e",
									fontSize: "22px",
									fontWeight: "400",
									fontFamily: "Bebas Neue",
								}}
							>
								ORDER SUMMARY
							</Typography>
							<div className='cartRightDivSummary_child  '>
								<Typography style={{ width: "36%", textAlign: "left" }}>
									Subtotal:
								</Typography>
								<Typography
									style={{
										color: "#16243e",
										fontWeight: "600",
									}}
								>
									Rs. {Math.round(subTotalPrice)}
								</Typography>
							</div>
							<div className='cartRightDivSummary_child '>
								<Typography style={{ width: "36%", textAlign: "left" }}>
									Delievry Charges:
								</Typography>
								<Typography
									style={{
										color: "#16243e",
										fontWeight: "600",
										marginBottom: "10px",
									}}
								>
									Rs. 150
								</Typography>
							</div>
							<Divider />
							<div className='cartRightDivSummary_child cartRightDivSummary_lastChild  '>
								<Typography style={{ width: "40%", textAlign: "left" }}>
									Total
								</Typography>
								<Typography
									style={{
										fontWeight: "600",
									}}
								>
									Rs. {Math.round(subTotalPrice + 150)}
								</Typography>
							</div>
						</div>

						<div className='cartRightDiv_global'>
							<Typography
								variant='h6'
								style={{
									color: "#16243e",
									fontSize: "22px",
									fontWeight: "400",
									fontFamily: "Bebas Neue",
								}}
							>
								COUPON CODE
							</Typography>
							<div className='cartRightDivCoupon_child'>
								<TextField id='couponCode' placeholder='Enter Coupon Code' />
								<Button variant='contained' color='secondary'>
									<Link
										to='/cart'
										style={{
											textDecoration: "none",
											fontWeight: "600",
											color: "#fff",
											textAlign: "center",
											letterSpacing: "none",
										}}
									>
										Apply
									</Link>
								</Button>
							</div>
						</div>

						<div className='cartRightDiv_global'>
							<Typography
								variant='h6'
								style={{
									color: "#16243e",
									fontSize: "22px",
									fontWeight: "400",
									fontFamily: "Bebas Neue",
								}}
							>
								Your Recently Viewd Items
							</Typography>
							<div className='cartRightDivRecentView_child'>
								<div style={{ margin: "10px 0px 0px 20px" }}>
									<Table>
										<br />
										<Tbody>
											{RecentView.map((item) => (
												<Tr key={item.id}>
													<Td className=' wishlistRecentView__imageTd'>
														<img
															className='wishlistRecentView__image'
															alt='cartImage'
															src={item.img}
														/>
													</Td>
													<div className='wishlistRecentView__TdWrapper'>
														<Td>
															<h3>{item.name}</h3>
														</Td>
														<Td>
															{/* Ratings */}
															<Box
																borderColor='transparent'
																style={{
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
																	{Rating.value}
																</Typography>
															</Box>
														</Td>
														<Td>
															<h4 style={{ marginBottom: "5px" }}>
																{item.price}
															</h4>
														</Td>
														<Td>
															<Button
																className='cartRightDivRecentView_child_btn'
																variant='contained'
																color='secondary'
																style={{
																	textDecoration: "none",
																	fontWeight: "600",
																	color: "#fff",
																	textAlign: "center",
																	letterSpacing: "none",
																}}
															>
																Add
															</Button>
														</Td>
													</div>
													<Divider className='divider' />
												</Tr>
											))}
										</Tbody>
									</Table>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default MyCart;
