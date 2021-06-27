import React, { useState } from "react";
import "../header/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

const Header = ({ cartLength }) => {
	const [user, newUser] = useState("Ali Test");

	const handleUser = () => {
		newUser("Ali Verified");
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img className='header__logo' alt='headerLogo' src={logo} />
			</Link>
			<div className='header__search'>
				<input
					className='header__searchInput'
					type='text'
					placeholder='Search...'
				/>
				<SearchIcon className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<div className='header__option'>
					<Typography className='header__optionLineOne' onChange={handleUser}>
						{user}
					</Typography>
					<Typography className='header__optionLineTwo'>
						<Link to='/login' style={{ textDecoration: "none" }}>
							Sign In
						</Link>
					</Typography>
				</div>

				<div className='header__option'>
					<Typography className='header__optionLineOne'>Returns</Typography>
					<Typography className='header__optionLineTwo'>& Orders</Typography>
				</div>

				<div className='header__optionBasket'>
					<ShoppingBasketIcon />
					<Typography className='header__optionLineTwo header__basketCount'>
						{cartLength}
					</Typography>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartLength: state.shop.cart.length,
	};
};

export default connect(mapStateToProps, null)(Header);
