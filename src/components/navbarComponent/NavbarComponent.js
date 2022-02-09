// React Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Material icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseIcon from "@material-ui/icons/Close";
// Material Ui
import { Button, IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
// Css
import "../navbarComponent/NavbarComponent.css";

import NavbarRes from "./NavbarRes";
import UserInfo from "./UserInfo";
import Categories from "../homeComponent/banner/Categories";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../services/Api";

const NavbarComponent = ({ backgorundColor, logo, navLinksColor }) => {
	// Hamburger Content
	const [showCategory, setShowCategory] = useState(false);
	const cart = useSelector((state) => state.shop.products);
	const products = useSelector((state) => state.allProducts.products);
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");
	const userCartItem = useSelector(
		(state) => state?.user?.user?.total_cart_items
	);
	// console.log("length", cart);
	// DropDowns
	const [resizeable, setResizeObserver] = useState(
		window.innerWidth > 649 ? true : false
	);

	// Hamburger Icon
	const [categoryHamburger, setCategoryHamburger] = useState(
		window.innerWidth > 1165 ? false : true
	);
	// Filter Data
	const handleFilter = (event) => {
		const searchedWord = event.target.value;
		setWordEntered(searchedWord);
		const newFilter = products.filter((value) => {
			return value.title.toLowerCase().includes(wordEntered.toLowerCase());
		});
		if (searchedWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const handleClear = () => {
		setFilteredData([]);
		setWordEntered("");
	};
	useEffect(() => {
		const eventHandler = () => {
			if (window.innerWidth < 1165) {
				setCategoryHamburger(true);
				// console.log(window.scrollY);
			} else {
				setCategoryHamburger(false);
			}
		};
		window.addEventListener("resize", eventHandler);
		// window.addEventListener("scroll", eventHandler);
	}, []);

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
					<div className='hamburger__menu'>
						<IconButton
							style={{ color: "black" }}
							className='headerNav__HamburgerMenu'
							onClick={() => {
								setShowCategory(!showCategory);
							}}
						>
							<MenuOutlinedIcon />
						</IconButton>
					</div>

					{/* SearchBar */}
					<div className='headerNav__SearchBar'>
						<input
							type='text'
							placeholder='What are you looking for?'
							onChange={handleFilter}
							value={wordEntered}
						/>
						{filteredData.length === 0 ? (
							<Button className='headerNavSearchBar__btn'>
								<SearchRoundedIcon className='headerNavSearchBar__icon' />
							</Button>
						) : (
							<Button className='headerNavSearchBar__btn' onClick={handleClear}>
								<CloseIcon className='headerNavSearchBar__icon' />
							</Button>
						)}
						{filteredData.length !== 0 && (
							<div className='dataResult'>
								{filteredData.slice(0, 15).map((value, key) => (
									<a
										key={key}
										className='dataItem'
										href={`/product/${value?.id}`}
										style={{
											color: "#000000",
											textDecoration: "none",
											display: "flex",
											alignItems: "center",
											marginTop: "15px",
											justifyContent: "space-around",
										}}
									>
										<p
											style={{
												marginBottom: "10px",
												width: "50%",
											}}
										>
											{value.title}
										</p>
										<img
											style={{ height: "85px", width: "115px" }}
											src={value.image_url}
											alt={value.brand}
										/>
									</a>
								))}
							</div>
						)}
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
								// badgeContent={cart.length > 0 ? cart.length : 0}
								badgeContent={
									userCartItem ? userCartItem + cart?.length : cart?.length
								}
								color='secondary'
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
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

				{showCategory
					? categoryHamburger && <Categories customCateogry={customCss} />
					: categoryHamburger && (
							<Categories customCateogry={customCssResponsive} />
					  )}
			</nav>

			{/* Hamburger Content - Categories */}

			{/* <div
				className={
					showCategory
						? "bannerCategoryList__Hamburger bannerCategoryList__MobileView"
						: "bannerCategoryList__Hamburger"
				}
			>
				<div>
					<h3>Categories</h3>
					{Categories.map((category) => (
						<ListItemText key={category.id}>
							<Link to={category.link} className='bannerCategoryList__content'>
								{category.title}
							</Link>
						</ListItemText>
					))}
				</div>
			</div> */}
		</>
	);
};

export default NavbarComponent;

const customCss = {
	position: "absolute",
	top: "5.9rem",
	display: "flex",
	justifyContent: "flex-start",
	zIndex: "1",
	width: "100%",
	backgroundColor: "#fff",
	padding: "1rem 0 .2rem 5rem",
	borderBottom: "0.5rem solid rgb(255, 79, 79)",
	boxShadow: "1px -5px 17px 1px rgba(0,0,0,0.05)",
};

const customCssResponsive = {
	display: "none",
	width: "90%",
	margin: "auto",
	backgroundColor: "#fff",
};

// {navbar === false ? () : (
// 	<ResponsiveNavbar
// 		logo={logo}
// 		backgorundColor={backgorundColor}
// 		navLinksColor={navLinksColor}
// 	/>
// )}
