import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Fade,
	Grid,
	IconButton,
	Modal,
	Paper,
	Typography,
} from "@material-ui/core";
import c1 from "../../../assets/c1.jpg";
import { Pagination } from "@material-ui/lab";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "../singleProduct/SingleProduct.css";
import CartModal from "../singleProduct/CartModal";
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
		id: 8,
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
		id: 8,
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
		id: 8,
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
		id: 8,
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
		id: 8,
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
		id: 8,
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

	// ----------------------Cart

	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// -----------------------Pagination

	const [pageSize, setPageSize] = useState(16);
	const [page, setPage] = useState(1);
	const [data, setData] = useState(datas.slice(firstIndex, pageSize));

	useEffect(() => {
		setData(datas.slice(0, pageSize));
	}, [pageSize]);

	const handlePageChange = (event, value) => {
		setPage(value);
		setData(datas.slice(firstIndex + pageSize * (value - 1), pageSize * value));
	};

	// Pagination:/ Change width
	const changeWidth = (e) => {
		setPageSize(parseInt(e.target.value, 10));
	};

	// -----------------------Sort
	const [sort, setSort] = useState("");

	const handleChange = (event) => {
		setSort(event.target.value);
	};

	return (
		<div className='singleProduct'>
			<Box className='box rightBox' component='span' m={1}>
				<FormControl style={{ minWidth: 120 }}>
					<InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
					<Select id='sort_selection' value={sort} onChange={handleChange}>
						<MenuItem value={10}>Option One</MenuItem>
						<MenuItem value={20}>Option Two</MenuItem>
						<MenuItem value={30}>Option Three</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{data.map((item) => (
					<Card className='singleProduct__cart'>
						<div className='singleProduct_IconBtnDiv'>
							<IconButton style={{ zIndex: 1 }}>
								<ShoppingCart />
							</IconButton>
						</div>
						<img className={classes.media} src={item.image} alt={item.label} />
						<CartModal />

						<Typography align='center'>{item.label}</Typography>
						<Typography align='center'>{item.price}</Typography>
					</Card>
				))}
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