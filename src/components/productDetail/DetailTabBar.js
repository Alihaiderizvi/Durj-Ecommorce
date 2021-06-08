import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "transparent",
		marginTop: "50px",
	},
}));

const DetailTabBar = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Grid
			container
			className={classes.root}
			justify='center'
			style={{ marginTop: "60px" }}
		>
			<Grid item lg={8} md={8} sm={10} xs={12}>
				<AppBar position='static' style={{ backgroundColor: "#16243e" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='simple tabs example'
						centered
					>
						<Tab label='Description' {...a11yProps(0)} />
						<Tab label='Reviews' {...a11yProps(1)} />
						<Tab label='Ratings' {...a11yProps(2)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<Typography variant='h4'>Product Name:</Typography>
					<Typography paragraph style={{ width: "60%" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Typography>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Typography variant='h4'>Product Reviews:</Typography>
					<Typography paragraph style={{ width: "60%" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Typography>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Typography variant='h4'>Ratings:</Typography>
					<Typography paragraph style={{ width: "60%" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Typography>
				</TabPanel>
			</Grid>
		</Grid>
	);
};

export default DetailTabBar;
