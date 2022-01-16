import axios from "axios";

export function register(credentials) {
	return new Promise((resolve, reject) => {
		//   console.log("Sending Request", JSON.stringify(credentials));
		axios
			.post("/user/register", credentials)
			.then((response) => {
				console.log(response, "///");
				if (response.data.status === true) {
					console.log("login response", response);
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
}
