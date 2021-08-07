import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
	products: [],
	totalPrice: 0,
	totalQty: 0,
};

const {
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	ADD_PRODUCT_TO_CART,
	INCREMENT_CART_QUANTITY,
} = ActionTypes;

// action -> destructured to type and payload
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

export const shop = (state = initialState, { type, payload }) => {
	let findProd;
	let index;
	switch (type) {
		case ADD_PRODUCT_TO_CART:
			const { product, quantity } = payload;
			console.log(product);
			const check = state.products.find((prod) => prod.id === product.id);
			if (!check) {
				return {
					...state,
					products: [...state.products, product],
				};
			} else {
				return state;
			}

		case INCREMENT_CART_QUANTITY:
			findProd = state.products.find((prod) => prod.id === payload);
			index = state.products.findIndex((prod) => prod.id === payload);

			findProd.quantity += 1;
			state.products[index] = findProd;

			return {
				...state,
				totalPrice: state.totalPrice,
				totalQty: state.totalQty + 1,
			};

		default:
			return state;
	}
};

// updatedCart = [...state.cart];
// 			updatedItemIndex = updatedCart.findIndex(
// 				(item) => item.id === action.payload.id
// 			);
// 			if (updatedItemIndex < 0) {
// 				updatedCart.push({ ...action.payload, quantity: 1 });
// 			} else {
// 				const updatedItem = {
// 					...updatedCart[updatedItemIndex],
// 				};

// 				updatedItem.quantity++;
// 				updatedCart[updatedItemIndex] = updatedItem;
// 			}

// 			return { ...state, cart: updatedCart };
