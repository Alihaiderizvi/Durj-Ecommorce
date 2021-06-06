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
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@material-ui/core";
import c1 from "../../../assets/c1.jpg";
import { Pagination } from "@material-ui/lab";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

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
];

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: "100%",
		width: "100%",
		objectFit: "contain",
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

const firstIndex = 0;

const SingleProduct = () => {
	// ----------------------Cart
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// -----------------------Pagination

	const [pageSize, setPageSize] = useState(5);
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

			<div>
				<Grid>
					{data.map((item) => (
						<Card>
							<CardMedia
								className={classes.media}
								image={item.image}
								title={item.label}
							/>
							<CardActions
								disableSpacing
								style={{
									position: "absolute",
									top: 0,
									left: "300px",
								}}
							>
								<IconButton aria-label='add to favorites'>
									<ShoppingCart />
								</IconButton>
							</CardActions>
							<CardContent>
								<Typography align='center'>{item.label}</Typography>
								<Typography align='center'>{item.price}</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
				<Pagination
					count={Math.ceil(datas.length / pageSize)}
					page={page}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default SingleProduct;
