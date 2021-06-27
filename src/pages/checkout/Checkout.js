import React from "react";
import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import CheckoutComp from "../../components/checkoutComp/CheckoutComp";

const Checkout = () => {
	return (
		<div>
			<NavbarComp />
			{/* <Header /> */}
			<CheckoutComp />
			<Footer />
		</div>
	);
};

export default Checkout;
