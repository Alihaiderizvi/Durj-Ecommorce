import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import ProductDetail from "../../components/productDetail/ProductDetail";
import SubFotter from "../../components/subFooter/SubFotter";
import Trending from "../../components/trending/Trending";

const ProductDetailPage = () => {
	return (
		<div>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
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
