import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";
import LoginComp from "../../components/loginComponent/LoginComp";
import SubFotter from "../../components/subFooter/SubFotter";

const Login = () => {
	return (
		<>
			<HomeTop />
			<Header />
			<LoginComp />
			{/* <SubFotter /> */}
			<Footer />
		</>
	);
};

export default Login;
