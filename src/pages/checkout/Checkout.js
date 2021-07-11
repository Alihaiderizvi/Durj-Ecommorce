import React from "react";
import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import CheckoutComp from "../../components/checkoutComp/CheckoutComp";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
const Checkout = () => {
	return (
		<div>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<CheckoutComp />
			<Footer />
		</div>
	);
};

export default Checkout;
