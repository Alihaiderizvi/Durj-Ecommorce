import React from "react";
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import Header from "../../components/header/Header";
import RegForm from "../../components/registerPageComp/regForm/RegForm";
import Footer from "../../components/footer/Footer";

const Register = () => {
	return (
		<div>
			<NavbarComp />
			<Header />
			<RegForm />
			<Footer />
		</div>
	);
};

export default Register;
