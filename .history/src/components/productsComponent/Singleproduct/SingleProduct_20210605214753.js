import React from "react";

const SingleProduct = () => {
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
