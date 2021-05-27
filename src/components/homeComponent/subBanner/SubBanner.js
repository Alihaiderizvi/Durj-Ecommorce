import React from "react";

import bannerImage from "../../../assets/banner.png";
import { makeStyles } from "@material-ui/core";
const SubBanner = () => {
	const useStyles = makeStyles((_) => ({
		root: {
			margin: "50px",
			display: "flex",
			justifyContent: "center",
		},
		bannerImg: {
			width: "100%",
			height: "auto",
			margin: "auto 50px",
			maxHeight: "300px",
		},
	}));
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img className={classes.bannerImg} src={bannerImage} />
		</div>
	);
};

export default SubBanner;
