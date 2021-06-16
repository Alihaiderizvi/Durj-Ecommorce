import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WishlistComp from "../../components/wishlistComp/WishlistComp";

const Wishlist = () => {
	return (
		<div>
			<NavbarComp />
			<Header />
			<WishlistComp />
			<Footer />
		</div>
	);
};

export default Wishlist;
