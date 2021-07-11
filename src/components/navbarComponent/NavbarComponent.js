// React Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Material icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
// Material Ui
import { Button, IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
// Css
import "../navbarComponent/NavbarComponent.css";

import NavbarRes from "./NavbarRes";
import UserInfo from "./UserInfo";

const NavbarComponent = ({ backgorundColor, logo, navLinksColor }) => {
	const [resizeable, setResizeObserver] = useState(
		window.innerWidth > 649 ? true : false
	);

	useEffect(() => {
		const eventHandler = () => {
			if (window.innerWidth > 649) {
				setResizeObserver(true);
			} else {
				setResizeObserver(false);
			}
		};
		window.addEventListener("resize", eventHandler);
	}, []);

	// Navbar Hamburger On Scroll
	// const [navbar, setNavbar] = useState(false);

	// const addHamburgerMenu = () => {
	// 	if (window.scrollY >= 400) {
	// 		setNavbar(true);
	// 	} else {
	// 		setNavbar(false);
	// 	}
	// };

	// window.addEventListener("scroll", addHamburgerMenu);

	return (
		<>
			<nav className='navbar' style={{ backgroundColor: backgorundColor }}>
				<div className='headerNav__wrapper'>
					{/* Logo */}
					<div className='headerNav__logo'>
						<Link to='/'>
							<img src={logo} alt='logo' className='headerNav__logoImg' />
						</Link>
					</div>
					{/* Hamburger */}
					<IconButton
						style={{ color: "black" }}
						className='headerNav__HamburgerMenu'
					>
						<MenuOutlinedIcon />
					</IconButton>
					{/* SearchBar */}
					<div className='headerNav__SearchBar'>
						<input type='text' placeholder='What are you looking for'></input>
						<Button className='headerNavSearchBar__btn'>
							<SearchRoundedIcon className='headerNavSearchBar__icon' />
						</Button>
					</div>
					<Button className='headerNavSearchBar__ResBtn'>
						<SearchRoundedIcon className='headerNavSearchBar__Resicon' />
					</Button>
					{/* Navbar Links */}
					<div className='headerNav__Links'>
						<ul>
							<PersonAddRoundedIcon className='headerNavLinks__icon' />
							<li style={{ color: navLinksColor }}>
								<Link
									to='/login'
									style={{ color: "#16243e", textDecoration: "none" }}
								>
									Login
								</Link>
							</li>
							<Badge
								badgeContent={4}
								color='secondary'
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								max='10'
							>
								<ShoppingCartIcon className='headerNavLinks__icon' />
							</Badge>
							<li style={{ color: navLinksColor }}>
								<Link
									to='/cart'
									style={{ color: "#16243e", textDecoration: "none" }}
								>
									Cart
								</Link>
							</li>
						</ul>
						{/* Responsive UserInfo */}
						<NavbarRes />
					</div>
					{resizeable && <UserInfo />}
				</div>
			</nav>
		</>
	);
};

export default NavbarComponent;

// {navbar === false ? () : (
// 	<ResponsiveNavbar
// 		logo={logo}
// 		backgorundColor={backgorundColor}
// 		navLinksColor={navLinksColor}
// 	/>
// )}
