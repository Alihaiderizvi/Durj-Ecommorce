import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import LoginComp from "../../components/loginComponent/LoginComp";
const Login = () => {
	return (
		<>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<LoginComp />
			<Footer />
		</>
	);
};

export default Login;
