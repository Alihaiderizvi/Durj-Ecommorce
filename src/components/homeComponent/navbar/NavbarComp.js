import { CssBaseline, Typography } from "@material-ui/core";
import React from "react";
import "./NavbarComp.css";

const NavbarComp = () => {
	return (
		<div className='navbar__main'>
			<CssBaseline />
			<Typography>
				Welcome To <span style={{ fontWeight: "600" }}>DURJ</span> Store!
			</Typography>
		</div>
	);
};

export default NavbarComp;
