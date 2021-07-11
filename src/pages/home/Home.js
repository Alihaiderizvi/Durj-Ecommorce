import React from "react";
import Banner from "../../components/homeComponent/banner/Banner";
import Deal from "../../components//homeComponent/deals/Deal";
import FeatureCateogy from "../../components//homeComponent/featureCategory/FeatureCateogy";
import Footer from "../../components/footer/Footer";
import JustForYou from "../../components/homeComponent/justForYou/JustForYou";
import ShopByCategory from "../../components/homeComponent/shopByCategory/ShopByCategory";
import SubBanner from "../../components/homeComponent/subBanner/SubBanner";
import "../home/Home.css";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import TopSellingComp from "../../components/homeComponent/TopSellingSection/TopSellingComp";

const Home = () => {
	return (
		<div>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<Banner />
			<Deal />
			<TopSellingComp />
			<FeatureCateogy />
			<SubBanner />
			<JustForYou />
			<ShopByCategory />
			<Footer />
		</div>
	);
};

export default Home;
