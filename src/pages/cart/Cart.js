import React from "react";
import Footer from "../../components/footer/Footer";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import MyCart from "../../components/myCart/MyCart";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
const Cart = () => {
	return (
		<>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<MyCart />
			<Footer />
		</>
	);
};

export default Cart;
