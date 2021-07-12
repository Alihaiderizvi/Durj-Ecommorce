import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
import ReservationComp from "../../components/Reservations/ReservationComp";
const Reservation = () => {
	return (
		<div>
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<ReservationComp />
			<Footer />
		</div>
	);
};

export default Reservation;
