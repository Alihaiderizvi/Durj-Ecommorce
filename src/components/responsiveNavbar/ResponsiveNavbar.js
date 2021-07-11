// React Imports
import { useState } from "react";
// Material icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
// Css
import "../navbarComponent/NavbarComponent.css";
import { Button, IconButton } from "@material-ui/core";

const ResponsiveNavbar = ({ backgorundColor, logo, navLinksColor }) => {
	return (
		<>
			<nav className='navbar' style={{ backgroundColor: backgorundColor }}>
				<div className='headerNav__wrapper'>
					<div className='headerNav__logo'>
						<img src={logo} alt='logo' />
						<IconButton style={{ color: "black" }}>
							<MenuOutlinedIcon />
						</IconButton>
						{/* <div className='headerNav__hamburgerMenu'>
							<div className='hamburger'></div>
							<div className='hamburger'></div>
							<div className='hamburger'></div>
						</div> */}
					</div>
					<div className='headerNav__SearchBar'>
						<input type='text' placeholder='What are you looking for'></input>
						<Button className='headerNavSearchBar__btn'>
							<SearchRoundedIcon className='headerNavSearchBar__icon' />
						</Button>
					</div>
					<div className='headerNav__Links'>
						<ul>
							<PersonAddRoundedIcon className='headerNavLinks__icon' />
							<li style={{ color: navLinksColor }}>Login</li>
							<ShoppingCartRoundedIcon className='headerNavLinks__icon' />
							<li style={{ color: navLinksColor }}>Cart</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default ResponsiveNavbar;
