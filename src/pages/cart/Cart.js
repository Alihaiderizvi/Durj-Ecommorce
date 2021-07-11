import React from "react";
import Footer from "../../components/footer/Footer";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
// import Header from "../../components/header/Header";
import MyCart from "../../components/myCart/MyCart";
const Cart = () => {
	return (
		<>
			<HomeTop />
			{/* <Header /> */}
			<MyCart />
			<Footer />
		</>
	);
};

export default Cart;
