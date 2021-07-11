import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import ProductsHeader from "../../components/productsComponent/productsHeader/ProductsHeader";
import ProductsMain from "../../components/productsComponent/productsMain/ProductsMain";
import Trending from "../../components/trending/Trending";

const Products = () => {
	return (
		<div>
			<HomeTop />
			<Header />
			<ProductsHeader />
			<ProductsMain />
			<Trending />
			<Footer />
		</div>
	);
};

export default Products;
