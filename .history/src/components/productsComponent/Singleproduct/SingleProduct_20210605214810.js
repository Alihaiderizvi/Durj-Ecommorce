import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box } from "@material-ui/core";

const SingleProduct = () => {
	const [sort, setSort] = useState("");

	const handleChange = (event) => {
		setSort(event.target.value);
	};

	return (
		<div className='singleProduct'>
			<FormControl style={{ minWidth: 120 }}>
				<InputLabel id='demo-simple-select-label'>Best Match</InputLabel>
				<Select id='sort_selection' value={sort} onChange={handleChange}>
					<MenuItem value={10}>Option One</MenuItem>
					<MenuItem value={20}>Option Two</MenuItem>
					<MenuItem value={30}>Option Three</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SingleProduct;
