import { useState } from "react";
import { Divider, Grid, Typography, IconButton } from "@material-ui/core";
import CheckoutForm from "./CheckoutForm";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import mainImage from "../../assets/product1.jpg";

import "../checkoutComp/CheckoutComp.css";

const data = [
	{ id: 1, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 2, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
	{ id: 2, img: mainImage, price: "Rs.19.99 PKR", qty: 4, Subtotal: "10,000" },
];

const CheckoutComp = () => {
	// Quantity Count
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

	// Check Box
	const [state, setState] = useState({
		checkboxCard: false,
		checkboxBankTransfer: false,
		checkCOD: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<>
			<br />
			<Divider
				style={{
					height: "4px",
					backgroundColor: "#16243e",
				}}
			/>
			<div className='checkout__title'>
				<h1>CHECKOUT</h1>
				<p>
					Please fill in the fields below and click 'Place Order' to complete
					your purchase
				</p>
			</div>
			<Grid container justify='center' className='checkout'>
				<CheckoutForm />
				<div className='checkoutMethod__main'>
					{/* Shipping method */}

					<div className='checkoutMethod__shipping'>
						<Typography variant='h6' className='checkout_headings'>
							SHIPPING METHOD
						</Typography>
						<hr />
						<div style={{ margin: "10px 0px 0px 20px" }}>
							<Typography className='checkout__subHeading'>
								Flat Rate
							</Typography>
							<Typography>
								<span style={{ letterSpacing: "1px", color: "gray" }}>
									Fixed
								</span>{" "}
								Rs.200
							</Typography>
						</div>
					</div>

					{/* Payment method */}

					<div item className='checkoutMethod__payment'>
						<Typography variant='h6' className='checkout_headings'>
							PAYMENT METHOD
						</Typography>
						<hr />
						<div style={{ margin: "10px 0px 0px 20px" }}>
							<FormGroup className='checkout__subHeading'>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkboxCard}
											onChange={handleChange}
											name='checkboxCard'
										/>
									}
									label='Debit/ Credit Card'
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkboxBankTransfer}
											onChange={handleChange}
											name='checkboxBankTransfer'
										/>
									}
									label='Bank Transfer Payment'
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkCOD}
											onChange={handleChange}
											name='checkCOD'
										/>
									}
									label='Cash On Delievery'
								/>
							</FormGroup>
						</div>
					</div>
				</div>

				{/* Order Review */}
				<Grid
					item
					xl={4}
					lg={3}
					md={4}
					sm={10}
					xs={12}
					className='checkout__overView'
				>
					<Typography variant='h6' className='checkout_headings'>
						ORDER REVIEW
					</Typography>
					<hr />

					<div style={{ margin: "10px 0px 0px 20px" }}>
						<Table>
							<br />
							<Thead>
								<Tr>
									<Th style={{ textAlign: "left" }}>Product</Th>
									<Th>Quantity</Th>
									<Th>TOTAL</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((item) => (
									<Tr key={item.id}>
										<Td className='cartTable__imageTd'>
											<img
												className='checkoutTable__image'
												alt='cartImage'
												src={item.img}
											/>
										</Td>
										<Td>
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
										</Td>
										<Td style={{ color: "red", fontWeight: "700" }}>
											{item.Subtotal}
										</Td>
										<Divider className='divider' />
									</Tr>
								))}
							</Tbody>
						</Table>
					</div>
					<hr />
					<div style={{ margin: "10px 10px 0px 0px" }}>
						<div className='checkout__orderTotal'>
							<Typography align='left'>Sub Total</Typography>
							<Typography>Rs 2,994</Typography>
						</div>
						<div className='checkout__orderTotal'>
							<Typography>Shipping</Typography>
							<Typography>Rs. 200</Typography>
						</div>
						<div className='checkout__orderTotal'>
							<Typography>Grand Total</Typography>
							<Typography>Rs. 3,500</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default CheckoutComp;
