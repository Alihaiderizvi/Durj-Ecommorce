// False Anyone can go inside
// True only logged in can go inside

export const Routes = {
	"/": {
		authRequired: false,
	},
	"/Durj-Ecommorce/wishlist": {
		authRequired: true,
	},
	"/Durj-Ecommorce/reservation": {
		authRequired: true,
	},
};
