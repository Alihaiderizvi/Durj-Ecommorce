import React from "react";

import bannerImage from "../../../assets/banner.png";
import { makeStyles } from "@material-ui/core";
const SubBanner = () => {
	const useStyles = makeStyles((_) => ({
		root: {
			width: "90%",
			margin: "5rem auto 2rem auto",
		},
		bannerImg: {
			width: "100%",
			height: "auto",
			maxHeight: "20rem",
		},
	}));
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img className={classes.bannerImg} src={bannerImage} alt='bannerimg' />
		</div>
	);
};

export default SubBanner;
