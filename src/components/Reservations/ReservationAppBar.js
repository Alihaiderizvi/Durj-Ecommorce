import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";

import addImage from "../../assets/add.png";
import ReservationMain from "./ReservationMain";

// Categoies data

const Categories = [
	{
		id: 1,
		title: "Kitechen Appliances",
		link: "/products",
	},
	{
		id: 2,
		title: "Electronic Devices",
		link: "/products",
	},
	{
		id: 3,
		title: "Home & Lifestyle",
		link: "/products",
	},
	{
		id: 4,
		title: "Womens Collection",
		link: "/products",
	},
	{
		id: 5,
		title: "Mens Collection",
		link: "/products",
	},
	{
		id: 6,
		title: "Kids Collection",
		link: "/login",
	},
];

// App bar And Drawer

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
		backgroundColor: "rgb(20 43 87)",
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
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
		position: "unset",
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const ReservationAppBar = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<List className='productsMain__list'>
				<h3 className='productsMain__heading'>Categories</h3>
				<div style={{ textAlign: "center", width: "80%", margin: "30px auto" }}>
					{Categories.map((category) => (
						<ListItemText style={{ paddingLeft: 0 }}>
							<Link to={category.link} className='productsMain__content'>
								{category.title}
							</Link>
						</ListItemText>
					))}
				</div>
				<div className='wishlist__drawer'>
					<Typography variant='h5' style={{ fontWeight: "600" }}>
						Hurry Up !!
					</Typography>
					<img
						className='wishlistDrawer__image'
						src={addImage}
						alt='wishlistDrawerImage'
					/>
				</div>
			</List>
			<Divider />
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
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							width: "100%",
						}}
					>
						<Typography variant='h7' noWrap>
							<Link to='/' style={{ color: "#fff", textDecoration: "none" }}>
								HOME
							</Link>
						</Typography>
						<Typography variant='h7' noWrap>
							<Link
								to='/products'
								style={{ color: "#fff", textDecoration: "none" }}
							>
								SALE
							</Link>
						</Typography>
						<Typography variant='h7' noWrap>
							<Link
								to='/products'
								style={{ color: "#fff", textDecoration: "none" }}
							>
								FEATURED
							</Link>
						</Typography>
						<Typography variant='h7' noWrap>
							<Link to='/' style={{ color: "#fff", textDecoration: "none" }}>
								CONTACT US
							</Link>
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
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
				{/* WishList Products */}
				<ReservationMain />
			</main>
		</div>
	);
};

export default ReservationAppBar;
