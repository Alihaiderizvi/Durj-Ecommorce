import React from "react";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import RegForm from "../../components/registerPageComp/regForm/RegForm";
import Footer from "../../components/footer/Footer";
import HomeTop from "../../components/homeComponent/homeTop/HomeTop";

const Register = () => {
	return (
		<div>
			<HomeTop />
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<RegForm />
			<Footer />
		</div>
	);
};

export default Register;
