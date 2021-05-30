import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import LoginComp from "../../components/loginComponent/LoginComp";
import SubFotter from "../../components/subFooter/SubFotter";

const Login = () => {
	return (
		<>
			<NavbarComp />
			<Header />
			<LoginComp />
			<SubFotter />
			<Footer />
		</>
	);
};

export default Login;
