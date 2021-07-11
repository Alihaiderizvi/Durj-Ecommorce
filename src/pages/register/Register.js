import React from "react";
import Header from "../../components/header/Header";
import RegForm from "../../components/registerPageComp/regForm/RegForm";
import Footer from "../../components/footer/Footer";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";

const Register = () => {
	return (
		<div>
			<HomeTop />
			<Header />
			<RegForm />
			<Footer />
		</div>
	);
};

export default Register;
