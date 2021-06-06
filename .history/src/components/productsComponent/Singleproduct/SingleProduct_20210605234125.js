import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, Card, Divider, Grid, Paper, Typography } from "@material-ui/core";
import c1 from "../../../assets/c1.jpg";
import { Pagination } from "@material-ui/lab";

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

const firstIndex = 0;

const SingleProduct = () => {
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
								image='https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY='
								title='Paella dish'
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
									<FavoriteIcon />
								</IconButton>
							</CardActions>
							<CardContent>
								<Typography align='center'></Typography>
								<Typography align='center'></Typography>
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
