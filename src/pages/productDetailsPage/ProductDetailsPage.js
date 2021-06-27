import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import ProductDetail from "../../components/productDetail/ProductDetail";
import SubFotter from "../../components/subFooter/SubFotter";
import Trending from "../../components/trending/Trending";

const ProductDetailPage = () => {
	return (
		<div>
			<NavbarComp />
			<Header />
			<ProductDetail />
			<Trending />
			<br />
			<br />
			<br />
			<SubFotter />
			<br />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default ProductDetailPage;
