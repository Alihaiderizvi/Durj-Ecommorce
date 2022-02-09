import Axios from "axios";
import { store } from "../redux/store";

const baseURL = "https://letsunderstandquran.com/application/public/api";

export const URL = {
	register: `${baseURL}/customer/create`,
	login: `${baseURL}/customer/login`,
	navbar: `${baseURL}/navbar`,
	product: `${baseURL}/product-type`,
	productDetails: `${baseURL}/product`,
	products: `${baseURL}/products`,
	addToCart: `${baseURL}/cart/add`,
	cart: `${baseURL}/cart`,
	wishlist: `${baseURL}/wishlist`,
	addWishlist: `${baseURL}/wishlist/add`,
	reservation: `${baseURL}/reservation`,
	addReservation: `${baseURL}/reservation/add`,
};

export const headers = {
	"content-type": "application/json",
};

export const get = async (endPoint) => {
	console.log("from get", endPoint);
	return new Promise((resolve, reject) => {
		Axios.get(endPoint)
			.then((response) => {
				if (response.data.status === 200) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch((error) => {
				console.log("login error", error);
				reject(error.data);
			});
	});
};

export const post = async (endPoint, data) => {
	return new Promise((resolve, reject) => {
		Axios.post(endPoint, data)
			.then((response) => {
				if (response.data.status === 200) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch((error) => {
				// if (error.message == "Request failed with status code 401") {
				// 	store.dispatch({ type: "LOGOUT" });
				// 	alert("Session expired");
				// 	reject(error.data);
				// } else {
				reject(error.data);
				// }
				//   console.log('errr',error)
				// console.log("login error", error);
				// reject(error.data);
			});
	});
};
