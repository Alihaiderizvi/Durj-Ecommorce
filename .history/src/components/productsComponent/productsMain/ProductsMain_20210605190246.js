import React from "react";
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
import { makeStyles, useTheme } from "@material-ui/core/styles";

// custom css
import "../productsMain/ProductsMain.css";
import ProductsTab from "./ProductsTab";
import { Link } from "react-router-dom";

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
			// backgroundColor: "transparent !important",
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
		overflowY: "hidden",
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
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className='productsMain__drawer' />
			<List className='productsMain__list'>
				<h3 className='productsMainCategory__heading'>CATEGORIES</h3>
				{Categories.map((category) => (
					<ListItemText style={{ paddingLeft: 0 }}>
						<Link to={category.link} className='productsMain__content'>
							{category.title}
						</Link>
					</ListItemText>
				))}
			</List>
		</div>
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
