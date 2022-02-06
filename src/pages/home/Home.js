import React from "react";
import Banner from "../../components/homeComponent/banner/Banner";
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
import DealSection from "../../components/homeComponent/dealSection/DealSection";

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
			{/* <DealSection /> */}
			<TopSellingComp />
			<FeatureCateogy />
			<SubBanner />
			<JustForYou />
			<ShopByCategory Title='Shop By Category' />
			<Footer />
		</div>
	);
};

export default Home;
