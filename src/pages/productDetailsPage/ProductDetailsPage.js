import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import ProductDetail from "../../components/productDetail/ProductDetail";
import SubFotter from "../../components/subFooter/SubFotter";
import Trending from "../../components/trending/Trending";

const ProductDetailPage = () => {
	return (
		<div>
			<HomeTop />
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
