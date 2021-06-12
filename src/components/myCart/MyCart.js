import {
	Button,
	Divider,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@material-ui/core";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import mainImage from "../../assets/product1.jpg";

// Css import
import "../myCart/MyCart.css";
import { Link } from "react-router-dom";

const data = [
	{ id: 1, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 2, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 3, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 4, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 5, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 6, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 7, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 8, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
];

const MyCart = () => {
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
						<Typography variant='h4' gutterBottom>
							My Cart
						</Typography>
						<Divider />
						<br />
						<Table>
							<br />
							<Thead>
								<Tr>
									<Th style={{ textAlign: "left" }}>Product</Th>
									<Th>Price</Th>
									<Th>Quantity</Th>
									<Th>TOTAL</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((item) => (
									<Tr key={item.id}>
										<Td className='cartTable__imageTd'>
											<img
												className='cartTable__image'
												alt='ProductImage'
												src={item.img}
											/>
											<p>
												PHILIPS BLENDER <br /> (HR2104/03)
											</p>
										</Td>
										<Td>{item.price}</Td>
										<Td>{item.qty}</Td>
										<Td style={{ color: "red", fontWeight: "700" }}>
											{item.Subtotal}
										</Td>
										<Td className='cartTable__delBtn'>
											<IconButton>
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
						<Button variant='contained' color='secondary'>
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
						<Button variant='contained' color='secondary'>
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
				<Grid item xl={4} lg={4} sm={10} xs={12} align='center'>
					<div className='cart__rightDiv'>
						<div className='cartRightDiv_global'>
							<Typography
								variant='h6'
								style={{
									color: "#16243e",
									fontSize: "18px",
									fontWeight: "600",
								}}
							>
								ORDER SUMMARY
							</Typography>
							<div className='cartRightDivSummary_child  '>
								<Typography style={{ width: "30%", textAlign: "left" }}>
									Subtotal:
								</Typography>
								<Typography
									style={{
										color: "#16243e",
										fontWeight: "600",
									}}
								>
									Rs. 50,000
								</Typography>
							</div>
							<div className='cartRightDivSummary_child '>
								<Typography style={{ width: "30%", textAlign: "left" }}>
									Delievry Charges:
								</Typography>
								<Typography
									style={{
										color: "#16243e",
										fontWeight: "600",
										marginBottom: "10px",
									}}
								>
									Rs. 2,500
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
									Rs. 52,500
								</Typography>
							</div>
						</div>

						<div className='cartRightDiv_global'>
							<Typography
								variant='h6'
								style={{
									color: "#16243e",
									fontSize: "18px",
									fontWeight: "600",
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
										}}
									>
										Apply
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default MyCart;
