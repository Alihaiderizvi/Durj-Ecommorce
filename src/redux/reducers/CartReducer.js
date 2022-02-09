const initialState = {
	cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "DELETE_FROM_CART":
			return { ...state };
		default:
			return state;
	}
};
export default CartReducer;
