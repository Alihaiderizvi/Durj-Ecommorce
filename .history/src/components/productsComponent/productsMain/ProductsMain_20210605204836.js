import { React, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Box from "@material-ui/core/Box";

// custom css
import "../productsMain/ProductsMain.css";
import ProductsTab from "./ProductsTab";
import { Link } from "react-router-dom";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Slider,
} from "@material-ui/core";

// Price Range
const priceLabel = [
	{
		value: 0,
		label: "low",
	},
	{
		value: 50,
		label: "mid",
	},
	{
		value: 100,
		label: "high",
	},
];

function valuetext(value) {
	return `${value}Rs`;
}

const StyledRating = withStyles({
	iconFilled: {
		color: "#2E5F82",
		marginRight: "10px",
	},
	iconHover: {
		color: "#2E5F82",
	},
})(Rating);

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			backgroundColor: "transparent !important",
			boxShadow: "unset",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		// overflowY: "hidden",
		position: "unset !important",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const Categories = [
	{
		id: 1,
		title: "Kitechen Appliances",
		link: "/",
	},
	{
		id: 2,
		title: "Electronic Devices",
		link: "/",
	},
	{
		id: 3,
		title: "Home & Lifestyle",
		link: "/",
	},
	{
		id: 4,
		title: "Womens Collection",
		link: "/",
	},
	{
		id: 5,
		title: "Mens Collection",
		link: "/",
	},
	{
		id: 6,
		title: "Kids Collection",
		link: "/login",
	},
];

const ProductsMain = (props) => {
	// Location Checkbox

	const [state, setState] = useState({
		Karachi: true,
		faislabad: false,
		Islamabad: false,
		Lahore: false,
		Sukkur: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const { Karachi, faislabad, Islamabad, Lahore, Sukkur } = state;
	const error =
		[Karachi, faislabad, Islamabad, Lahore, Sukkur].filter((v) => v).length !==
		2;

	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<>
			<div className='productsMain__drawer'>
				<List className='productsMain__list'>
					<h3 className='productsMain__heading'>CATEGORIES</h3>
					{Categories.map((category) => (
						<ListItemText style={{ paddingLeft: 0 }}>
							<Link to={category.link} className='productsMain__content'>
								{category.title}
							</Link>
						</ListItemText>
					))}
				</List>
				<Divider />
				<List className='productsMain__list'>
					<h3 className='productsMain__heading'>COLOR FAMILY</h3>
					<div style={{ textAlign: "center", width: "80%", margin: "auto" }}>
						{[
							"black",
							"#2C6193",
							"#B73A49",
							"#CA26A6",
							"#006B00",
							"#B1ADAC",
							"#FFFE2E",
							"#FF9B3B",
							"#F60300",
							"#2CE4ED",
						].map((item) => (
							<span class='dot' style={{ backgroundColor: item }}></span>
						))}
					</div>
				</List>
				<Divider />
				<List className='productsMain__list'>
					<h3 className='productsMain__heading'>RATING</h3>
					<div style={{ textAlign: "center", width: "80%", margin: "auto" }}>
						{[5, 4, 3, 2, 1].map((item) => (
							<Box borderColor='transparent'>
								<StyledRating
									name='customized-color'
									defaultValue={item}
									precision={0.5}
									emptyIcon={
										<StarOutlineIcon
											fontSize='inherit'
											style={{ marginRight: "10px" }}
										/>
									}
								/>
							</Box>
						))}
					</div>
				</List>
				{/* Price Range */}
				<List className='productsMain__list'>
					<h3 className='productsMain__heading'>PRICE</h3>
					<div
						style={{ textAlign: "center", width: "80%", margin: "50px auto " }}
					>
						<Slider
							defaultValue={80}
							getAriaValueText={valuetext}
							aria-labelledby='discrete-slider-always'
							marks={priceLabel}
							valueLabelDisplay='on'
						/>
					</div>
				</List>
				{/* Location CheckBox */}
				<List className='productsMain__list'>
					<h3 className='productsMain__heading'>EXPRESS DELIVERY</h3>
					<div
						style={{
							textAlign: "center",
							width: "80%",
							margin: "50px auto ",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<FormControl component='fieldset'>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											checked={Karachi}
											onChange={handleChange}
											name='Khi'
										/>
									}
									label='Karachi'
								/>
								<FormControlLabel
									control={<Checkbox onChange={handleChange} name='fsb' />}
									label='faislabad'
								/>
								<FormControlLabel
									control={<Checkbox onChange={handleChange} name='isb' />}
									label='Islamabad'
								/>
								<FormControlLabel
									control={<Checkbox onChange={handleChange} name='lhr' />}
									label='Lahore'
								/>
								<FormControlLabel
									control={<Checkbox onChange={handleChange} name='skr' />}
									label='Sukkur'
								/>
							</FormGroup>
						</FormControl>
					</div>
				</List>
			</div>
		</>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<ProductsTab />
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
			</main>
		</div>
	);
};

export default ProductsMain;
