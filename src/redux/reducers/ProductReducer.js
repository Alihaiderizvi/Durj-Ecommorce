import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
	products: [],
	cart: [],
};

const {
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	ADD_PRODUCT_TO_CART,
	INCREMENT_CART_QUANTITY,
} = ActionTypes;

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case SELECTED_PRODUCT:
			return { ...state, ...payload };
		case REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};

export const shop = (state = initialState, action) => {
	let updatedCart;
	let updatedItemIndex;

	switch (action.type) {
		case INCREMENT_CART_QUANTITY:
			updatedCart = [...state.cart];
			updatedItemIndex = updatedCart.findOne(
				(item) => item.id === action.payload
			);

			const incrementItem = {
				...updatedCart[updatedItemIndex],
			};

			incrementItem.quantity++;

			updatedCart[updatedItemIndex] = incrementItem;

			return { ...state, cart: updatedCart };

		case ADD_PRODUCT_TO_CART:
			updatedCart = [...state.cart];
			updatedItemIndex = updatedCart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (updatedItemIndex < 0) {
				updatedCart.push({ ...action.payload, quantity: 1 });
			} else {
				const updatedItem = {
					...updatedCart[updatedItemIndex],
				};

				updatedItem.quantity++;
				updatedCart[updatedItemIndex] = updatedItem;
			}

			return { ...state, cart: updatedCart };

		default:
			return state;
	}
};
