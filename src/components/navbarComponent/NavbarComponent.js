// React Imports
import { useState } from "react";
// Material icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// Css
import "../navbarComponent/NavbarComponent.css";
import { Button } from "@material-ui/core";
import ResponsiveNavbar from "../responsiveNavbar/ResponsiveNavbar";

const NavbarComponent = ({ backgorundColor, logo, navLinksColor }) => {
	const [navbar, setNavbar] = useState(false);

	const addHamburgerMenu = () => {
		if (window.scrollY >= 900) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", addHamburgerMenu);

	return (
		<>
			{navbar === false ? (
				<nav className='navbar' style={{ backgroundColor: backgorundColor }}>
					<div className='headerNav__wrapper'>
						<div className='headerNav__logo'>
							<img src={logo} alt='logo' />
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
			) : (
				<ResponsiveNavbar
					logo={logo}
					backgorundColor={backgorundColor}
					navLinksColor={navLinksColor}
				/>
			)}
		</>
	);
};

export default NavbarComponent;
