import React from "react";
import ExpressDelievery from "../../assets/Icons/express-delivery.png";
import COD from "../../assets/Icons/cash-on-delivery.png";
import FreeReturn from "../../assets/Icons/free-return.png";
import CustService from "../../assets/Icons/customer-service.png";
import { Box, Paper, Typography } from "@material-ui/core";
import "../subFooter/SubFotter.css";
const SubFotter = () => {
	const Data = [
		{
			id: 1,
			image: ExpressDelievery,
			contentHead: "Fast Shipping",
			content: "Shipping In 1-3 days",
		},
		{
			id: 2,
			image: FreeReturn,
			contentHead: "Free Return",
			content: "Free 7 Days Return",
		},
		{
			id: 3,
			image: CustService,
			contentHead: "Customer Service",
			content: "Phone and Email",
		},
		{
			id: 4,
			image: COD,
			contentHead: "Cash On Delivery",
			content: "Cash On Delivery Option",
		},
	];
	return (
		<>
			<Paper className='subFotter' component={Box} p={3}>
				{Data.map((data) => (
					<div className='subFotter__container' key={data.id}>
						<img
							src={data.image}
							alt='SubFotter Img'
							className='subFotter__img'
						/>
						<div>
							<Typography variant='h6' className='subFotter__contentHead'>
								{data.contentHead}
							</Typography>
							<Typography className='subFotter__content'>
								{data.content}
							</Typography>
						</div>
					</div>
				))}
			</Paper>
		</>
	);
};

export default SubFotter;
