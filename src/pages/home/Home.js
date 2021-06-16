import React from "react";
import Banner from "../../components/homeComponent/banner/Banner";
import Deal from "../../components//homeComponent/deals/Deal";
import FeatureCateogy from "../../components//homeComponent/featureCategory/FeatureCateogy";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import JustForYou from "../../components/homeComponent/justForYou/JustForYou";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import ShopByCategory from "../../components/homeComponent/shopByCategory/ShopByCategory";
import SubBanner from "../../components/homeComponent/subBanner/SubBanner";
import TopSelling from "../../components/homeComponent/topSelling/TopSelling";
import "../home/Home.css";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";

const Home = () => {
	return (
		<div>
			<NavbarComp />
			<Header />
			{/* <NavbarComponent backgorundColor='#fff' logo={logo} textColor='#16243e' /> */}
			<Banner />
			<Deal />
			<TopSelling />
			<FeatureCateogy />
			<SubBanner />
			<JustForYou />
			<ShopByCategory />
			<Footer />
		</div>
	);
};

export default Home;
