import WishlistAppbar from "./WishlistAppbar";

import "../wishlistComp/WishlistComp.css";
import { Grid } from "@material-ui/core";
const WishlistComp = () => {
	return (
		<div className='wishlist'>
			{/* Wishlist Appbar  */}
			<WishlistAppbar />
		</div>
	);
};

export default WishlistComp;
