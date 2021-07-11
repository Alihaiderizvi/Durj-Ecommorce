import { CssBaseline, Typography } from "@material-ui/core";
import "./HomeTop.css";
import { Link } from "react-router-dom";
import React from "react";

const HomeTop = () => {
	return (
		<div className='homeTop'>
			<CssBaseline />
			<Typography
				style={{ width: "90%", margin: "auto", fontSize: "1rem !important" }}
			>
				<Link to='/' style={{ color: "#fff", textDecoration: "none" }}>
					Return & Exchange
				</Link>
			</Typography>
		</div>
	);
};

export default HomeTop;
