import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import productsHeader from "../../components/productsComponent/productsHeader/productsHeader";

const Products = () => {
	return (
		<div>
			<NavbarComp />
			<Header />
			<productsHeader />
			<Footer />
		</div>
	);
};

export default Products;
