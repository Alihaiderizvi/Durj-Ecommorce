import Footer from "../../components/footer/Footer";
import WishlistComp from "../../components/wishlistComp/WishlistComp";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import logo from "../../assets/logo.png";
const Wishlist = () => {
	return (
		<div>
			<NavbarComponent
				backgorundColor='#fff'
				logo={logo}
				navLinksColor='#16243e'
			/>
			<WishlistComp />
			<Footer />
		</div>
	);
};

export default Wishlist;
