import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import ProductsHeader from "../../components/productsComponent/productsHeader/ProductsHeader";
import ProductsMain from "../../components/productsComponent/productsMain/ProductsMain";
import Trending from "../../components/trending/Trending";

const Products = () => {
	return (
		<div>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<ProductsHeader />
			<ProductsMain />
			<Trending />
			<Footer />
		</div>
	);
};

export default Products;
