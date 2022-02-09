import { ActionTypes } from "../constants/ActionTypes";

const Initial_state = {
	user: {},
	isLogin: false,
};

const UserReducer = (state = Initial_state, { type, payload }) => {
	switch (type) {
		case "LOGIN":
			return { ...state, user: payload, isLogin: true };
		case "LOGOUT":
			return { ...state, user: {}, isLogin: false };
		default:
			return state;
	}
};

export default UserReducer;
