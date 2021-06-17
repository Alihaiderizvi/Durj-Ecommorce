import WishlistAppbar from "./WishlistAppbar";

import "../wishlistComp/WishlistComp.css";
import { useSelector } from "react-redux";

const WishlistComp = () => {
	// const products = useSelector((state) => state);
	// console.log(products);
	return (
		<div className='wishlist'>
			{/* Wishlist Appbar  */}
			<WishlistAppbar />
		</div>
	);
};

export default WishlistComp;
