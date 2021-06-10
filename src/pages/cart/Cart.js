import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import MyCart from "../../components/myCart/MyCart";
const Cart = () => {
	return (
		<>
			<NavbarComp />
			{/* <Header /> */}
			<MyCart />
			<Footer />
		</>
	);
};

export default Cart;
