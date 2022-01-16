import Axios from "axios";
import { store } from "../redux/store";

const baseURL = "https://durj.api.magneetech.com/public/api";

export const URL = {
	register: `${baseURL}/customer/create`,
	login: `${baseURL}/customer/login`,
	updateUser: "user/updateInfo",
	ChangePassword: "user/changePassword",
	logout: "user/logout",
	verifyToken: "user/verifyToken",
	userInfo: "user/me",
	resetPasswordInit: "user/resetPasswordInit",
	compareOtp: "user/compareOTP",
	resetPassword: "user/resetPassword",
};

export const headers = {
	"content-type": "application/json",
};

export const get = async (endPoint) => {
	let token = store.getState().user.token;
	// endPoint = `${endPoint}&lang=${lang}`
	console.log("from get", endPoint);
	return new Promise((resolve, reject) => {
		Axios.get(endPoint)
			.then((response) => {
				if (response.data.status === true) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch((error) => {
				console.log("login error", error);
				// if (error.message === "Request failed with status code 401") {
				// 	store.dispatch({ type: "LOGOUT" });
				// 	alert("Session expired");
				// 	reject(error.data);
				// } else {
				reject(error.data);
				// }
			});
	});
};

export const post = async (endPoint, data) => {
	// let token = store.getState().user.token;
	// let language = store.getState().language.lang;
	// data.lang = language;
	return new Promise((resolve, reject) => {
		Axios.post(endPoint, data)
			.then((response) => {
				console.log("res", response);
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
